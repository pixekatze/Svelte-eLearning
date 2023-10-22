<script>
	import Folder from "./Folder.svelte";
	export let expanded = false;
	export let menu;

	console.log(menu);

	function toggle() {
		expanded = !expanded;
	}
</script>

<!-- 44px -->
<a href={menu.url} class="hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700">
	{@html menu.svg}
	{menu.name}</a
>
