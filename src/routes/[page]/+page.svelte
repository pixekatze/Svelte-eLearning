<script>
	import { page } from "$app/stores";
	export let data;
	import HeroImage from "$lib/HeroImage.svelte";
	import PromoPageOne from "$lib/PromoPageOne.svelte";
	import Feature from "$lib/Feature.svelte";
	import Feed from "$lib/Feed.svelte";

	$: path = parseInt($page.url.pathname.replace(/\/(\d+)$/, "$1"));

	console.log(path);
</script>

<div class="flex h-full w-full bg-white absolute justify-center items-center px-16">
	{#if path == 1}
		<HeroImage {data} />
	{:else if path == 2}
		<Feature {data} />
	{:else}
		<PromoPageOne {data} />
	{/if}
</div>
