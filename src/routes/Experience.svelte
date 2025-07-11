<script>
	import { base } from '$app/paths';
	import { windowSize } from '$lib/stores/windowSizeStore.js';
	import GlassWrapper from './GlassWrapper.svelte';
</script>

<section class="flex w-full flex-col" itemscope itemtype="https://schema.org/ItemList">
	<h1 class="text-6xl font-bold">My Experience</h1>
	<p>Click the cards to learn more!</p>
	<h2 class="mb-5 text-3xl font-bold">Software Engineering</h2>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
		itemscope itemtype="https://schema.org/JobPosting"
	>
		<div class="flex space-x-3">
			<img src="{base}/vanguard.svg" alt="Vanguard Group Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl" itemprop="title">Software Engineering Intern @ Vanguard</h1>
				<p class="text-lg" itemprop="datePosted">May 2025 - Present</p>
			</div>
		</div>
		<div class="mt-2" itemprop="description">
			<p>
				Developed full-stack applications for AWS account tracking and personal finance management:
			</p>
			<ul class="mt-2 list-disc pl-6">
				<li>Built AWS account tracking application using AWS Lambda, S3, and Angular frontend</li>
				<li>Implemented LLM-powered transaction classifier with AWS Bedrock and DynamoDB</li>
				<li>Created RESTful API for transaction data management</li>
				<li>Leveraged Agile methodologies in fast-paced development environment</li>
			</ul>
		</div>
	</GlassWrapper>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
		itemscope itemtype="https://schema.org/JobPosting"
	>
		<div class="flex space-x-3">
			<img src="{base}/playmaker.svg" alt="PlayMaker Software Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl" itemprop="title">AI & Backend Software Engineer Intern @ PlayMaker</h1>
				<p class="text-lg" itemprop="datePosted">December 2024 - May 2025</p>
			</div>
		</div>
		<div class="mt-2" itemprop="description">
			<p>
				Engineered AI-powered contract analysis system for sports sponsorship optimization:
			</p>
			<ul class="mt-2 list-disc pl-6">
				<li>Built contract analysis pipeline using Google Cloud Services and PostgreSQL with pgvector</li>
				<li>Developed RAG chatbot with Gemini LLMs for contract inquiries</li>
				<li>Created automated Asset Extractor module for identifying sellable contract items</li>
				<li>Implemented vector embeddings and similarity search for efficient data retrieval</li>
			</ul>
		</div>
	</GlassWrapper>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
		itemscope itemtype="https://schema.org/JobPosting"
	>
		<div class="flex space-x-3">
			<img src="{base}/princeton.svg" alt="Princeton University Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl" itemprop="title">Electronics and Control Systems Intern @ Princeton Physics</h1>
				<p class="text-lg" itemprop="datePosted">May 2023 - September 2023</p>
			</div>
		</div>
		<div class="mt-2" itemprop="description">
			<p>
				Contributed to NASA's FLOATing DRAGON Balloon Challenge project:
			</p>
			<ul class="mt-2 list-disc pl-6">
				<li>Implemented autonomous control systems in C++ for glider navigation</li>
				<li>Developed algorithms for glider stabilization and flight path control</li>
				<li>Created Hardware-in-the-loop pipeline with MATLAB, reducing development time by 40%</li>
				<li>Conducted extensive testing and validation of control systems</li>
				<li>Collaborated with interdisciplinary research team under NASA contract</li>
			</ul>
		</div>
	</GlassWrapper>
	<h2 class="mt-5 mb-5 text-3xl font-bold">Teaching & Leadership</h2>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
		itemscope itemtype="https://schema.org/Organization"
	>
		<div class="flex space-x-3">
			<img src="{base}/rocketry.png" alt="Princeton Rocketry Club Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl" itemprop="name">Avionics Sub-team Lead @ Princeton Rocketry Club</h1>
				<p class="text-lg">September 2024 - May 2025</p>
			</div>
		</div>
		<div class="mt-2" itemprop="description">
			<p>
				Pioneered and spearheaded development of Princeton Rocketry SRAD Flight Computer:
			</p>
			<ul class="mt-2 list-disc pl-6">
				<li>Successfully used in launch to 30,000 feet at Spaceport America Cup in June 2025</li>
				<li>Led team of 8 peers to develop computer powered by STM32 microcontroller</li>
				<li>Implemented air-brake control system for accurate flight paths</li>
				<li>Developed custom radio protocol for communication</li>
				<li>Integrated Kalman filters for on-board sensor data filtering</li>
			</ul>
		</div>
	</GlassWrapper>

	<GlassWrapper
		class="mb-5 w-[90%] self-center rounded-2xl p-5"
		onclick={() => {
			console.log('TODO');
		}}
		itemscope itemtype="https://schema.org/JobPosting"
	>
		<div class="flex space-x-3">
			<img src="{base}/princeton.svg" alt="Princeton University Logo" class="h-16 w-16" />
			<div>
				<h1 class="text-3xl" itemprop="title">Teaching Assistant - Multiple Courses</h1>
				<p class="text-lg" itemprop="datePosted">February 2025 - Present</p>
			</div>
		</div>
		<div class="mt-2" itemprop="description">
			<p>
				Supporting student learning across multiple computer science courses:
			</p>
			<ul class="mt-2 list-disc pl-6">
				<li>TA for Data Structures and Algorithms (COS226)</li>
				<li>TA for Intro to Systems Programming (COS217)</li>
				<li>Grader for Full-Stack Web Development (COS333)</li>
			</ul>
		</div>
	</GlassWrapper>
</section>
