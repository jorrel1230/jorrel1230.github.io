<script>
  let { image = '', alt = '', title = '', detail = '', professor = '', lab = '', description = '' } = $props();
</script>

<p class="item">
  {#if image}<img src={image} {alt} />{/if}
  <span>
    {#if title}<strong>{title}</strong> {detail}{/if}
    {#if professor || lab}<br /><span class="research-meta">{#if lab}<span class="lab">{lab}</span>{/if}{#if professor}<span class="collaborators">with {professor}</span>{/if}</span>{/if}
    {#if (title || professor || lab) && description}<br />{/if}
    {description}
  </span>
</p>
