<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
</script>

<div
	class="flex w-full flex-col
			{$windowSize.isMobile ? 'items-center' : 'm-full items-start'}"
>
	<h1 class="text-6xl font-bold md:text-8xl">Some Personal Projects</h1>

	<p class="mt-2 text-xl md:text-3xl">Todo</p>
</div>
