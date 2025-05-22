<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
</script>

<div
	class="flex w-full flex-col
			{$windowSize.isMobile ? 'items-center' : 'm-full items-start'}"
>
	<h1 class="mb-2 text-6xl font-bold md:text-6xl">Resume</h1>

	<p class="mt-2 text-xl md:text-2xl">Last Updated September 2024. (Outdated)</p>
	{#if $windowSize.isMobile}
		<a
			href="{base}/Rajan,Jorrel.pdf"
			class="m-2 flex items-center space-x-2 bg-gray-100 p-2 shadow"
		>
			<img src="{base}/download.svg" alt="download icon" class="h-8 w-8" />
			<p>Download Resume</p>
		</a>
	{:else}
		<div class="h-[85vh] w-full">
			<iframe title="resume" src="{base}/Rajan,Jorrel.pdf" width="100%" height="100%"></iframe>
		</div>
	{/if}
</div>
