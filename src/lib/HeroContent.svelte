<script>
	export let data = {
		page: "1",
		title: "Title",
		content: "<p>Content</p>",
	};
</script>

<div class="flex justify-center items-center flex-col w-full lg:flex-row-reverse px-32 py-10">
	<img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="w-1/3 rounded-3xl shadow-2xl aspect-square" />
	<div class="w-2/3 lg:mr-10">
		<h1 class="text-5xl font-bold">{data.page.title}</h1>
		<div class="py-6">
			{@html data.page.content}
		</div>
	</div>
</div>
