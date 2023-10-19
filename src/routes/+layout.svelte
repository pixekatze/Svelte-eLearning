<script>
	import MenuIcon from "$lib/MenuIcon.svelte";
	import "../app.css";
	import SideMenu from "$lib/SideMenu.svelte";
	import SideMenuTwo from "$lib/SideMenuTwo.svelte";
</script>

<main class="xl:container xl:mx-auto h-full lg:h-fit lg:aspect-video flex overflow-hidden rounded-lg ring-1 ring-slate-900/10">
	<div class="flex relative w-full">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class=" flex w-full relative justify-between">
			<MenuIcon />

			<slot />
		</div>
		<div class="drawer-side absolute z-[2] overflow-hidden h-full">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
			<SideMenuTwo />
		</div>
	</div>
</main>
