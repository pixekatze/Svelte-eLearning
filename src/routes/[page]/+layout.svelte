<script>
	export let data;
	import NavigationLeft from "$lib/NavigationLeft.svelte";
	import NavigationRight from "$lib/NavigationRight.svelte";
</script>

<NavigationLeft />

<slot />

<NavigationRight />
