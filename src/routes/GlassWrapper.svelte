<div id="glass" {...$$restProps}>
	<slot></slot>
</div>

<style>
	#glass {
		background: linear-gradient(135deg, rgba(200, 200, 200, 0.35), rgba(200, 200, 200, 0.1));
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
	}
</style>
