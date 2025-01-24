<script lang="ts">
	import type { Snippet } from 'svelte';
	import './style/style.css';
	import './style/code.css';

	const { children }: { children: Snippet } = $props();
</script>

<main>
	{@render children()}
</main>
