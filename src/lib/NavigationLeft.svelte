<script>
	import { page } from "$app/stores";
	import NavigationLeftEmpty from "$lib/NavigationLeftEmpty.svelte";

	$: path = parseInt($page.url.pathname.replace(/\/(\d+)$/, "$1"));
	$: prevPath = path - 1;
	$: prevPage = "/" + prevPath;
</script>

{#if path === 1}
	<div class="flex items-center h-full">
		<div class="z-[1] ml-4">
			<a href="/" class="btn bg-transparent border-0 h-fit p-2" style="--tw-bg-opacity: 0.2; --b3: 0 0% 0%;">
				<svg
					class="fill-none stroke-indigo-600 stroke-2"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 26.7 66.6"
					width="27px"
					height="67px"
				>
					<style type="text/css">
						.st0 {
							stroke-linecap: round;
							stroke-linejoin: round;
						}
					</style>
					<polyline class="st0" points="23.2,3.6 3.2,33.6 23.2,63.6 " />
				</svg>
			</a>
		</div>
	</div>
{:else}
	<div class="flex items-center h-full">
		<div class="z-[1] ml-4">
			<a href={prevPage} class="btn bg-transparent border-0 h-fit p-2" style="--tw-bg-opacity: 0.2; --b3: 0 0% 0%;">
				<svg
					class="fill-none stroke-indigo-600 stroke-2"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 26.7 66.6"
					width="27px"
					height="67px"
				>
					<style type="text/css">
						.st0 {
							stroke-linecap: round;
							stroke-linejoin: round;
						}
					</style>
					<polyline class="st0" points="23.2,3.6 3.2,33.6 23.2,63.6 " />
				</svg>
			</a>
		</div>
	</div>
{/if}
