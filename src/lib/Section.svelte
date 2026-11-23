<script>
  import Entry from './Entry.svelte';
  let { title, entries } = $props();
</script>

<section id={title.toLowerCase()}>
  <hr class="rule" />
  <h2>{title}</h2>
  <div class="copy">
    {#each entries as entry}
      <Entry {...entry} />
    {/each}
  </div>
</section>
