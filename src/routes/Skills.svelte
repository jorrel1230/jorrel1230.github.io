<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
	import GlassWrapper from './GlassWrapper.svelte';
</script>

<section class="flex w-full flex-col" itemscope itemtype="https://schema.org/ItemList">
	<h1 class="text-6xl font-bold">Technical Skills</h1>
	<p class="mb-6">Technologies and tools I've worked with across my projects and experience.</p>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<GlassWrapper class="rounded-2xl p-5" itemscope itemtype="https://schema.org/ItemList">
			<h2 class="mb-4 text-2xl font-bold text-blue-600">Programming Languages</h2>
			<div class="flex flex-wrap gap-2">
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">Python</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">JavaScript</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">Java</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">C</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">C++</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">Assembly</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">SQL</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">HTML/CSS</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">R</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">MATLAB</span>
				<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800" itemprop="itemListElement">Swift</span>
			</div>
		</GlassWrapper>

		<GlassWrapper class="rounded-2xl p-5" itemscope itemtype="https://schema.org/ItemList">
			<h2 class="mb-4 text-2xl font-bold text-green-600">Cloud & AWS</h2>
			<div class="flex flex-wrap gap-2">
				<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800" itemprop="itemListElement">Lambda</span>
				<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800" itemprop="itemListElement">S3</span>
				<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800" itemprop="itemListElement">API Gateway</span>
				<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800" itemprop="itemListElement">DynamoDB</span>
				<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800" itemprop="itemListElement">SES</span>
				<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800" itemprop="itemListElement">Bedrock</span>
			</div>
		</GlassWrapper>

		<GlassWrapper class="rounded-2xl p-5" itemscope itemtype="https://schema.org/ItemList">
			<h2 class="mb-4 text-2xl font-bold text-purple-600">Frameworks & Libraries</h2>
			<div class="flex flex-wrap gap-2">
				<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800" itemprop="itemListElement">React</span>
				<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800" itemprop="itemListElement">Angular</span>
				<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800" itemprop="itemListElement">SvelteKit</span>
				<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800" itemprop="itemListElement">Node</span>
				<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800" itemprop="itemListElement">Express</span>
				<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800" itemprop="itemListElement">Vite</span>
				<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800" itemprop="itemListElement">Flask</span>
				<span class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800" itemprop="itemListElement">Django</span>
			</div>
		</GlassWrapper>

		<GlassWrapper class="rounded-2xl p-5" itemscope itemtype="https://schema.org/ItemList">
			<h2 class="mb-4 text-2xl font-bold text-orange-600">Data Science & ML</h2>
			<div class="flex flex-wrap gap-2">
				<span class="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800" itemprop="itemListElement">pandas</span>
				<span class="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800" itemprop="itemListElement">NumPy</span>
				<span class="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800" itemprop="itemListElement">PyTorch</span>
				<span class="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800" itemprop="itemListElement">TensorFlow</span>
				<span class="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800" itemprop="itemListElement">FAISS</span>
				<span class="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800" itemprop="itemListElement">LangChain</span>
			</div>
		</GlassWrapper>

		<GlassWrapper class="rounded-2xl p-5" itemscope itemtype="https://schema.org/ItemList">
			<h2 class="mb-4 text-2xl font-bold text-red-600">Databases & Tools</h2>
			<div class="flex flex-wrap gap-2">
				<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800" itemprop="itemListElement">MongoDB</span>
				<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800" itemprop="itemListElement">PostgreSQL</span>
				<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800" itemprop="itemListElement">Docker</span>
				<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800" itemprop="itemListElement">Git</span>
				<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800" itemprop="itemListElement">Linux</span>
			</div>
		</GlassWrapper>

		<GlassWrapper class="rounded-2xl p-5" itemscope itemtype="https://schema.org/ItemList">
			<h2 class="mb-4 text-2xl font-bold text-indigo-600">Specialized Skills</h2>
			<div class="flex flex-wrap gap-2">
				<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800" itemprop="itemListElement">Embedded Systems</span>
				<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800" itemprop="itemListElement">STM32</span>
				<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800" itemprop="itemListElement">Kalman Filters</span>
				<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800" itemprop="itemListElement">Hardware-in-the-Loop</span>
				<span class="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800" itemprop="itemListElement">Control Systems</span>
			</div>
		</GlassWrapper>
	</div>
</section> 