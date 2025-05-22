<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
	import GlassWrapper from './GlassWrapper.svelte';
</script>

<div class="flex w-full flex-col">
	<h1 class="text-6xl font-bold">My Experience</h1>
	<p>Click the cards to learn more!</p>
	<br />
	<h2 class="mb-5 text-3xl font-bold">Software Engineering</h2>

	<GlassWrapper
		class="w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			alert('TODO');
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
	<br />
	<GlassWrapper
		class="w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			alert('TODO');
		}}
	>
		<div class="flex space-x-3">
			<img src="{base}/playmaker.svg" alt="Vanguard Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl">Software Engineering Intern @ PlayMaker</h1>
				<p class="text-lg">December 2024 - May 2025</p>
			</div>
		</div>
		<div class="">To Be Updated..</div>
	</GlassWrapper>
	<br />
	<GlassWrapper
		class="w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			alert('TODO');
		}}
	>
		<div class="flex space-x-3">
			<img src="{base}/playmaker.svg" alt="Vanguard Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl">Software Engineering Intern @ PlayMaker</h1>
				<p class="text-lg">December 2024 - May 2025</p>
			</div>
		</div>
		<div class="">To Be Updated..</div>
	</GlassWrapper>
	<h2 class="mt-5 mb-5 text-3xl font-bold">Other</h2>

	<p class="mt-2 text-xl">Todo</p>
</div>
