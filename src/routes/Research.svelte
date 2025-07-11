<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
	import GlassWrapper from './GlassWrapper.svelte';
</script>

<div class="flex w-full flex-col">
	<h1 class="text-6xl font-bold">Research Experience</h1>
	<p class="mb-6">Interested in AI/ML Research!</p>

	<GlassWrapper class="mb-5 w-[90%] self-center rounded-2xl p-5">
		<div class="flex space-x-3">
			<img src="{base}/princeton.svg" alt="Princeton Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl">Protein Homology Detection Using Protein Language Model Embeddings</h1>
				<p class="text-lg">Princeton University · January 2025 - May 2025</p>
			</div>
		</div>
		<div class="mt-2">
			<p>
				Developed a novel protein homology detection method utilizing fine-tuned protein language model (PLM) embeddings and contrastive learning:
			</p>
			<ul class="mt-2 list-disc pl-6">
				<li>Addressed scalability limitations of traditional sequence alignment tools like BLAST</li>
				<li>Achieved significant improvement in homology detection accuracy relative to BLAST</li>
				<li>Engineered solution delivering 5X speedup in homology search using Meta's FAISS library</li>
				<li>Optimized embedding space for protein homology discrimination</li>
				<li>Enabled scalable search over large protein databases</li>
			</ul>
		</div>
	</GlassWrapper>
</div>
