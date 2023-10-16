<script>
	import Slider from '$lib/Slider.svelte';
</script>

<section>
	<div>
		{#each [0, 5, 2, 3, 4, 8, 6, 7, 8] as i}
			<Slider value={i} max={10} --track-width="200px" />
		{/each}
	</div>
</section>

<style>
	div {
		width: fit-content;
		padding: 8px 10px;
		box-shadow: 0 0 8px #aaa;
		background-color: white;
		border-radius: 8px;
	}
	section {
		width: fit-content;
		width: 256px;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ddd;
	}
</style>
