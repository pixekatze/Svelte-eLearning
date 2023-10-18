<script>
	import { page } from "$app/stores";
	export let data;
	import HeroContent from "$lib/HeroContent.svelte";
	import Card from "$lib/Card.svelte";
	import Feature from "$lib/Feature.svelte";

	$: path = parseInt($page.url.pathname.replace(/\/(\d+)$/, "$1"));

	console.log(path);
</script>

<div class="flex h-full w-full bg-white absolute justify-center items-center px-16">
	{#if path == 1}
		<HeroContent {data} />
	{:else if path == 2}
		<Feature {data} />
	{:else}
		<Card {data} />
	{/if}
</div>
