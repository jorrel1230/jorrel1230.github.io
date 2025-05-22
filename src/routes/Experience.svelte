<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
	import GlassWrapper from './GlassWrapper.svelte';
</script>

<div class="flex w-full flex-col">
	<h1 class="text-6xl font-bold">My Experience</h1>
	<p>Click the cards to learn more!</p>
	<h2 class="mb-5 text-3xl font-bold">Software Engineering</h2>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
	>
		<div class="flex space-x-3">
			<img src="{base}/vanguard.svg" alt="Vanguard Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl">Software Engineering Intern @ Vanguard</h1>
				<p class="text-lg">May 2025 - August 2025</p>
			</div>
		</div>
		<div class="">To Be Updated..</div>
	</GlassWrapper>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
	>
		<div class="flex space-x-3">
			<img src="{base}/playmaker.svg" alt="Vanguard Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl">Software Engineering Intern @ PlayMaker</h1>
				<p class="text-lg">Part-Time · December 2024 - May 2025</p>
			</div>
		</div>
		<div class="mt-2">
			<p>
				PlayMaker is a startup aiming to create software and leverage AI to optimize the sports
				sponsorship industry. While at PlayMaker, I fully architected, developed, and shipped:
			</p>

			<ol>
				<li>1) An AI-Agent powered "asset extractor" for sports sponsorship contracts.</li>
				<li>
					2) Retrieval-Augmented Generation (RAG) chatbot allowing users to ask questions regarding
					their contracts.
				</li>
			</ol>
		</div>
	</GlassWrapper>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
	>
		<div class="flex space-x-3">
			<img src="{base}/princeton.svg" alt="Vanguard Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl">Electronics and Control Systems Intern @ Princeton Physics</h1>
				<p class="text-lg">Part-Time · May 2023 - Sep 2023</p>
			</div>
		</div>
		<div class="mt-2">
			<p>
				Implemented control systems in C++ on an autonomous glider for a NASA contracted "FLOATing
				DRAGON Balloon Challenge".
			</p>
		</div>
	</GlassWrapper>
	<h2 class="mt-5 mb-5 text-3xl font-bold">Other</h2>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
	>
		<div class="flex space-x-3">
			<img src="{base}/princeton.svg" alt="Vanguard Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl">COS333 Grader</h1>
				<p class="text-lg">Part-Time · Feb 2025 - May 2025</p>
			</div>
		</div>
		<div class="mt-2">
			<p>
				Graded various full-stack web applications for COS333. Graded projects in a variety of
				frameworks, such as jQuery, React.js, & Next.js.
			</p>
		</div>
	</GlassWrapper>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
	>
		<div class="flex space-x-3">
			<img src="{base}/princeton.svg" alt="Vanguard Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl">COS 226/217 Lab TA</h1>
				<p class="text-lg">Part-Time · Feb 2025 - May 2025</p>
			</div>
		</div>
		<div class="mt-2">
			<p>
				Helped students with homework assignments for COS226 (Data Structures and Algorithms) and
				COS217 (Systems Programming).
			</p>
		</div>
	</GlassWrapper>
</div>
