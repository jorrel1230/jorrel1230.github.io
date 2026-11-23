<script>
  import Section from '$lib/Section.svelte';
  import sections from '$lib/sections.json';
</script>
<svelte:head><title>Jorrel Rajan — Software Engineer</title><meta name="description" content="Jorrel Rajan, Princeton computer science student and software engineer." /></svelte:head>
<main>
<p class="kicker">JORREL RAJAN · PRINCETON UNIVERSITY</p>
<h1>Hi, I'm Jorrel.</h1>
<p class="lead">Computer science student focused on software engineering, AI/ML, and systems programming. Bachelor of Engineering in Computer Science, with minors in Statistics & Machine Learning and Robotics.</p>
<p><a class="contact" href="https://www.linkedin.com/in/jorrelrajan/">LinkedIn →</a>　<a class="contact" href="https://github.com/jorrel1230">GitHub →</a>　<a class="contact" href="/Rajan,Jorrel.pdf">Resume (PDF) →</a></p>
{#each sections as section}
  <Section {...section} />
{/each}
</main>
