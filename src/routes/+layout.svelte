<script>
	import MenuIcon from "$lib/MenuIcon.svelte";
	import "../app.css";
	import SideMenu from "$lib/SideMenu.svelte";
</script>

<main class="xl:container xl:mx-auto h-screen lg:h-fit lg:aspect-video flex overflow-hidden rounded-lg ring-1 ring-slate-900/10">
	<div class="flex relative w-full">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class=" flex w-full relative justify-between">
			<!-- Menu Icon -->
			<MenuIcon />

			<slot />
		</div>
		<div class="drawer-side absolute z-[2] overflow-hidden">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
			<SideMenu />
		</div>
	</div>
</main>
