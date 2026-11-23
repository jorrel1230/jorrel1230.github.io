<script>
  import { page } from '$app/state'
  import '../app.css'
  let { children } = $props()
</script>

<div class="page">
  <header>
    <a class="brand" href="/">JorrelRajan.com</a>
    <nav aria-label="Main navigation">
      <a class="nav" href="/" aria-current={page.url.pathname === '/' ? 'page' : undefined}>Home</a>
      <a class="nav" href="/misc/" aria-current={page.url.pathname.replace(/\/$/, '') === '/misc' ? 'page' : undefined}>Misc</a>
    </nav>
  </header>

  {@render children()}

  <footer>© 2026 Jorrel Rajan</footer>
</div>
