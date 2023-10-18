<script>
	import { page } from "$app/stores";
	$: path = parseInt($page.url.pathname.replace(/\/(\d+)$/, "$1"));
	$: nextPath = path + 1;
	$: nextPage = "/" + nextPath;
</script>

<div class="flex items-center h-full">
	<div class="z-[1] mr-4">
		<a href={nextPage} class="btn h-fit p-2 bg-white border-0">
			<svg
				class="fill-none stroke-current stroke-2"
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
				<polyline class="st0" points="4.2,63.6 24.2,33.6 4.2,3.6 " />
			</svg>
		</a>
	</div>
</div>
<!--  -->
