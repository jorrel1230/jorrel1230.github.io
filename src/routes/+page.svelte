<script>
	import { windowSize } from '$lib/stores/windowSizeStore.js';
	import About from './About.svelte';
	import Experience from './Experience.svelte';
	import Research from './Research.svelte';
	import Projects from './Projects.svelte';
	import Resume from './Resume.svelte';
</script>

<div id="top" class="mt-28 scroll-mt-32"></div>

<div
	id="about"
	class="m-5 flex scroll-mt-32 rounded-lg bg-white p-4
		{$windowSize.isMobile ? 'flex-col items-center py-8 text-center' : 'h-fit flex-row items-center'}"
>
	<About />
</div>

<hr class="m-5" />

<div
	id="experience"
	class="m-5 flex scroll-mt-32 rounded-lg bg-white p-4
		{$windowSize.isMobile ? 'flex-col items-center py-8 text-center' : 'h-fit flex-row items-center'}"
>
	<Experience />
</div>

<hr class="m-5" />

<div
	id="research"
	class="m-5 flex scroll-mt-32 rounded-lg bg-white p-4
		{$windowSize.isMobile ? 'flex-col items-center py-8 text-center' : 'h-fit flex-row items-center'}"
>
	<Research />
</div>

<hr class="m-5" />
<div
	id="projects"
	class="m-5 flex scroll-mt-32 rounded-lg bg-white p-4
		{$windowSize.isMobile ? 'flex-col items-center py-8 text-center' : 'h-fit flex-row items-center'}"
>
	<Projects />
</div>

<hr class="m-5" />

<div
	id="resume"
	class="m-5 flex scroll-mt-32 rounded-lg bg-white p-4
		{$windowSize.isMobile ? 'flex-col items-center py-8 text-center' : 'h-fit flex-row items-center'}"
>
	<Resume />
</div>

<style>
	/* You can add any global or component-specific styles here if needed, */
	/* though Tailwind CSS is handling most of it. */
</style>
