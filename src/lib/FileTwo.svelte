<script>
	import Folder from "./Folder.svelte";

	export let submMenu;

	console.log(submMenu);
</script>

<!-- 44px -->
<a href={submMenu.url} class="flex justify-between hover:bg-gray-50 block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700">
	{submMenu.name} {@html submMenu.svg}</a
>
