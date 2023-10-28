<script>
	import Folder from "./Folder.svelte";

	export let submMenu;

	console.log(submMenu);
</script>

<div class="absolute left-0 top-0 flex w-5 justify-center -bottom-6">
	{@html submMenu.line}
</div>
<div class="relative flex h-5 w-5 flex-none items-center justify-center bg-white">
	{@html submMenu.svg}
</div>
<a href={submMenu.url} class="flex-auto py-0.5 leading-5 text-xs text-gray-500">
	{submMenu.name}
</a>
