<script>
  import { onMount, tick } from 'svelte';
  let svgPath, path = $state(''), length = $state(1), drawn = $state(0), leaves = $state([]);
  const clamp = x => Math.min(1, Math.max(0, x));
  onMount(() => {
    const main = svgPath.closest('main');
    let initial = 0, end = 1, target = 0, frame = 0, last = 0, ready = false;
    function follow(now) {
      const dt = Math.min(now-last, 80);
      last = now;
      drawn += (target-drawn) * -Math.expm1(-dt/260);
      if (Math.abs(target-drawn) > .2) frame = requestAnimationFrame(follow);
      else { drawn = target; frame = 0; }
    }
    function scroll() {
      target = initial + (length-initial) * clamp(window.scrollY/Math.max(1,end));
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) drawn = target;
      else if (!frame) { last = performance.now(); frame = requestAnimationFrame(follow); }
    }
    async function layout() {
      const box = main.getBoundingClientRect(), gutter = Math.min(42, box.left*.56);
      const left = -gutter, right = box.width+gutter;
      const ys = [...main.querySelectorAll('.vine-space')].map(el => el.getBoundingClientRect().top-box.top+36);
      if (!ys.length) return;
      // Begin flush with the viewport, then sweep into the first divider.
      let d = `M ${-box.left} ${ys[0]-59} Q ${left} ${ys[0]-59} ${left} ${ys[0]-45}`;
      ys.forEach((y,i) => {
        const a = i%2 ? right:left, b = i%2 ? left:right;
        const span = b-a, sign = Math.sign(span), wave = [8,-6,4][i%3];
        const entry = Math.min(Math.abs(span)*.18, [70,82,58][i%3]);
        const exit = Math.min(Math.abs(span)*.20, [90,66,78][i%3]);
        const drop = [52,48,42][i%3];
        // Separate the actual turns from the long crossing: quarter ellipses
        // meet the vertical runners and the shallow wave exactly tangent.
        d += ` a ${entry} 45 0 0 ${sign>0?0:1} ${sign*entry} 45`;
        d += ` C ${a+span*.34} ${y}, ${a+span*.37} ${y+wave}, ${a+span*.50} ${y+wave}`;
        d += ` S ${b-span*.25} ${y}, ${b-sign*exit} ${y}`;
        d += ` a ${exit} ${drop} 0 0 ${sign>0?1:0} ${sign*exit} ${drop}`;
        if(i+1<ys.length) {
          const gap = ys[i+1]-45-y-drop, drift = Math.min(gutter*.48,17)*(i%2 ? -1 : 1);
          d += ` C ${b} ${y+drop+gap*.26}, ${b+drift} ${y+drop+gap*.32}, ${b+drift} ${y+drop+gap*.56}`;
          d += ` S ${b} ${ys[i+1]-90}, ${b} ${ys[i+1]-45}`;
        }
      });
      path = d; await tick();
      if (!svgPath?.isConnected) return;
      length = svgPath.getTotalLength();
      const top = main.getBoundingClientRect().top+scrollY;
      const bottom = Math.max(0, document.documentElement.scrollHeight-innerHeight);
      // Show the entrance bend plus roughly a quarter of the first crossing at rest.
      initial = Math.min(length, box.left + 35 + box.width*.24);
      end = Math.min(bottom, top+ys.at(-1)+45-innerHeight*.42);
      const buds = [];
      let seed = 37;
      const random = () => ((seed = (1664525*seed+1013904223) >>> 0)/4294967296);
      for(let dist=55;dist<length-50;dist+=(28+random()**1.6*180)*.5) {
        const p=svgPath.getPointAtLength(dist), next=svgPath.getPointAtLength(dist+1);
        const angle=Math.atan2(next.y-p.y,next.x-p.x)*180/Math.PI;
        const vertical=Math.abs(next.y-p.y)>.7;
        // Keep sprigs inside the narrow margin beside text, even on phones.
        const count=random()<.32 ? (random()<.25 ? 3 : 2) : 1;
        const side=random()<.5?-1:1;
        for(let k=0;k<count;k++) {
          const twig=random()<.35 ? 0 : 6+random()**1.4*30;
          const reach=twig ? 3+random()*20 : 0;
          const radius=Math.hypot(twig,reach)+23;
          const size=Math.min(.55+random()*.8,(vertical ? gutter*.91 : 36)/radius);
          buds.push({d:dist+k*4,x:p.x,y:p.y,angle:angle-42+random()*84,size,
            flip:k%2?-side:side,twig,reach,bend:(random()-.35)*twig,pair:random()<.51,
            twist:random()*100-50, rotation:random()*86-43});
        }
      }
      leaves = buds; scroll();
      if (!ready) { drawn = target; ready = true; }
    }
    const observer = new ResizeObserver(layout); observer.observe(main);
    window.addEventListener('resize',layout); window.addEventListener('scroll',scroll,{passive:true});
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('resize',layout); window.removeEventListener('scroll',scroll); };
  });
</script>

<svg class="ivy" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <path bind:this={svgPath} d={path} class="stem" stroke-dasharray={length} stroke-dashoffset={length-drawn} />
  <path d={path} class="grain" pathLength={1} stroke-dasharray=".009 .026 .016 .047 .006 .031" mask="url(#grown-bark)" />
  <defs><mask id="grown-bark" maskUnits="userSpaceOnUse" x="-100%" y="-10%" width="300%" height="120%">
    <path class="grain-mask" d={path} fill="none" stroke="white" stroke-width="14" stroke-dasharray={length} stroke-dashoffset={length-drawn} />
  </mask></defs>
  {#each leaves as leaf}
    {@const sprout = clamp((drawn-leaf.d)/24)}
    {@const bloom = clamp((drawn-leaf.d-15)/35)}
    <g transform="translate({leaf.x} {leaf.y}) rotate({leaf.angle}) scale({leaf.size} {leaf.size*leaf.flip})">
      <g class="bud" style:transform={'scale('+sprout+')'}>
        {#if leaf.twig}<path d="M0 0 Q{leaf.bend} {-leaf.twig*.3} {leaf.reach} {-leaf.twig}" fill="none" stroke="#ab9981" stroke-width="2.8" stroke-linecap="round" />{/if}
        <g transform="translate({leaf.reach} {-leaf.twig}) rotate({leaf.rotation})"><g class="bud" style:transform={'scale('+bloom+') rotate('+((1-bloom)*leaf.twist)+'deg)'}>
          <path d="M0 0 Q-13 -2 -14 -14 Q-2 -15 0 0Z" fill="#97ad8f" />
          {#if leaf.pair}<path d="M0 0 Q4 -10 15 -11 Q13 0 0 0Z" fill="#b0c0a6" />{/if}
        </g></g>
      </g>
    </g>
  {/each}
</svg>

<style>
  .ivy { position:absolute; inset:0; width:100%; height:100%; overflow:visible; pointer-events:none; z-index:-1; }
  .stem { fill:none; stroke:#99866c; stroke-opacity:.56; stroke-width:12; stroke-linecap:round; }
  .grain { fill:none; stroke:#f4ead9; stroke-width:1.8; opacity:.48; transform:translateY(-2px); }
  @media (prefers-reduced-motion:reduce) { .stem, .grain-mask { stroke-dashoffset:0; } .bud { transform:none !important; } }
</style>
