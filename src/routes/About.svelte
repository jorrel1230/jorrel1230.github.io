<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
</script>

<div class={$windowSize.isMobile ? 'mb-6 w-1/2 max-w-[200px]' : 'mr-6 max-h-fit'}>
	<img src="{base}/headshot.jpg" alt="Jorrel's Headshot" class="rounded-2xl" />
</div>
<div
	class="flex w-full flex-col
			{$windowSize.isMobile ? 'items-center' : 'm-full items-start'}"
>
	<h1 class="text-6xl font-bold md:text-8xl">Hi, I'm Jorrel</h1>

	<p class="mt-2 text-xl md:text-3xl">Undergrad @ Princeton University</p>
	<p class="text-xl md:text-3xl">Majoring in Computer Science</p>
	<p class="text-lg md:text-xl">Minoring in Statistics and Machine Learning, Robotics</p>

	<p class="mt-4 text-lg md:text-xl">Interested in working in AI/ML and Systems</p>

	<div class="mt-6 flex space-x-3">
		<a href="https://github.com/jorrel1230" class="w-auto">
			<div
				class="bg-opacity-50 hover:bg-opacity-100 rounded-md bg-neutral-50 p-2 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
			>
				<img src="{base}/github.svg" alt="Github Link" class="w-16" />
			</div>
		</a>

		<a href="https://www.linkedin.com/in/jorrelrajan/" class="w-auto">
			<div
				class="bg-opacity-50 hover:bg-opacity-100 rounded-md bg-neutral-50 p-2 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
			>
				<img src="{base}/linkedin.svg" alt="LinkedIn Link" class="w-16" />
			</div>
		</a>
	</div>
</div>
