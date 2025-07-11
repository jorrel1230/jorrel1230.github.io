<script lang="ts">
	// The $ prefix auto-subscribes to the store and unsubscribes when the component is destroyed.
	import { windowSize } from '$lib/stores/windowSizeStore.js'; // Adjust path as needed
	import { fly } from 'svelte/transition'; // For a nice slide-in/out effect

	import HamburgerIcon from './HamburgerIcon.svelte';
	let isNavOpen = false;

	const toggleNav = () => {
		isNavOpen = !isNavOpen;
	};

	const handleLinkClick = () => {
		isNavOpen = false;
	};
</script>

{#if !$windowSize.isMobile}
	<nav class="glass fixed top-0 z-40 w-full justify-between">
		<div class="relative z-50 flex w-full items-center p-6">
			<a href="#top" class="mr-auto">
				<p class="text-4xl">Jorrel Rajan</p>
			</a>

			<div id="items" class="ml-auto flex items-center gap-x-5">
				<a href="#about">
					<p class="text-2xl">About Me</p>
				</a>

				<a href="#experience">
					<p class="text-2xl">Experience</p>
				</a>

				<a href="#research">
					<p class="text-2xl">Research</p>
				</a>

				<a href="#skills">
					<p class="text-2xl">Skills</p>
				</a>

				<a href="#resume">
					<p class="text-2xl">Resume</p>
				</a>
			</div>
		</div>
	</nav>
{/if}

{#if $windowSize.isMobile}
	<nav class="glass fixed top-0 z-50 flex w-full items-center justify-between p-5">
		<HamburgerIcon isOpen={isNavOpen} on:click={toggleNav} />

		<a href="#top" class="mr-auto ml-5">
			<p class="text-4xl">Jorrel Rajan</p>
		</a>
	</nav>

	{#if isNavOpen}
		<div
			class="glass glass2 fixed top-20 right-0 left-0 z-40 flex flex-col space-y-4 p-5"
			transition:fly={{ y: -50, duration: 300, opacity: 0 }}
		>
			<a href="#about" on:click={handleLinkClick}>
				<p class="text-2xl">About Me</p>
			</a>

			<a href="#experience" on:click={handleLinkClick}>
				<p class="text-2xl">Experience</p>
			</a>

			<a href="#research" on:click={handleLinkClick}>
				<p class="text-2xl">Research</p>
			</a>

			<a href="#skills" on:click={handleLinkClick}>
				<p class="text-2xl">Skills</p>
			</a>

			<a href="#resume" on:click={handleLinkClick}>
				<p class="text-2xl">Resume</p>
			</a>
		</div>
	{/if}
{/if}

<style>
	.glass {
		background: linear-gradient(135deg, rgba(200, 200, 200, 0.35), rgba(200, 200, 200, 0.1));
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
	}

	.glass2 {
		background: linear-gradient(135deg, rgba(100, 100, 100, 0.35), rgba(100, 100, 100, 0.15));
	}
</style>
