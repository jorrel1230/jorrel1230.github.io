<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
</script>

<section id="about" class={$windowSize.isMobile ? 'mb-6 w-1/2 max-w-[200px]' : 'mr-6 max-h-fit'} itemscope itemtype="https://schema.org/Person">
	<img src="{base}/headshot.jpg" alt="Jorrel Rajan's professional headshot" class="rounded-2xl" itemprop="image" />
</section>
<div
	class="flex w-full flex-col
			{$windowSize.isMobile ? 'items-center' : 'm-full items-start'}"
	itemscope itemtype="https://schema.org/Person"
>
	<h1 class="text-6xl font-bold md:text-8xl" itemprop="name">Hi, I'm Jorrel</h1>

	<p class="mt-2 text-xl md:text-3xl" itemprop="jobTitle">Computer Science Student @ Princeton University</p>
	<p class="text-xl md:text-3xl" itemprop="alumniOf">Bachelor of Engineering in Computer Science</p>
	<p class="text-lg md:text-xl">Minors in Statistics & Machine Learning, Robotics</p>

	<p class="mt-4 text-lg md:text-xl" itemprop="description">
		Passionate about Software Engineering, AI/ML, and Systems Programming
	</p>

	<div class="mt-6 flex space-x-3">
		<a href="https://github.com/jorrel1230" class="w-auto" aria-label="Visit Jorrel's GitHub profile">
			<div
				class="bg-opacity-50 hover:bg-opacity-100 rounded-md bg-neutral-50 p-2 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
			>
				<img src="{base}/github.svg" alt="GitHub Link" class="w-16" />
			</div>
		</a>

		<a href="https://www.linkedin.com/in/jorrel-rajan/" class="w-auto" aria-label="Visit Jorrel's LinkedIn profile">
			<div
				class="bg-opacity-50 hover:bg-opacity-100 rounded-md bg-neutral-50 p-2 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
			>
				<img src="{base}/linkedin.svg" alt="LinkedIn Link" class="w-16" />
			</div>
		</a>
	</div>
</div>
