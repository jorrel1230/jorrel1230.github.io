<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
</script>

<div
	class="flex w-full flex-col
			{$windowSize.isMobile ? 'items-center' : 'm-full items-start'}"
>
	<h1 class="mb-2 text-6xl font-bold md:text-6xl">Resume</h1>

	<p class="mt-2 text-xl md:text-2xl">Updated July 2025</p>
	<p class="mt-2 text-lg md:text-xl text-gray-600">Download my resume to view my complete experience, skills, and qualifications.</p>
	
	{#if $windowSize.isMobile}
		<a
			href="{base}/Rajan,Jorrel.pdf"
			class="m-2 flex items-center space-x-2 rounded-lg bg-blue-500 p-4 text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
		>
			<img src="{base}/download.svg" alt="download icon" class="h-8 w-8" />
			<p class="font-semibold">Download Resume (PDF)</p>
		</a>
	{:else}
		<div class="mt-4 h-[85vh] w-full rounded-lg border-2 border-gray-200 shadow-lg">
			<iframe title="resume" src="{base}/Rajan,Jorrel.pdf" width="100%" height="100%" class="rounded-lg"></iframe>
		</div>
	{/if}
</div>
