<script>
	import FileTwo from "./FileTwo.svelte";

	export let expanded = false;
	export let menu;
	export let subMenus;

	function toggle() {
		expanded = !expanded;
	}

	subMenus = Object.values(menu.sub);

	console.log(subMenus);
</script>

<button
	on:click={toggle}
	type="button"
	class="hover:bg-gray-50 flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
	aria-controls="sub-menu-1"
	aria-expanded="false"
>
	{@html menu.svg}
	{menu.name}
	<svg
		class="{expanded ? 'rotate-90 text-gray-500' : 'text-gray-400'} ml-auto h-5 w-5 shrink-0"
		viewBox="0 0 20 20"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			fill-rule="evenodd"
			d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
			clip-rule="evenodd"
		/>
	</svg>
</button>

{#if expanded}
	<ul class="{expanded ? 'block' : 'hidden'} mt-1 px-2" id="sub-menu-1">
		{#each subMenus as submMenu}
			<li>
				<FileTwo {submMenu} />
			</li>
		{/each}
	</ul>
{/if}
