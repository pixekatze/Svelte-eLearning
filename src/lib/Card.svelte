<script>
	export let data = {
		page: "1",
		title: "Title",
		content: "<p>Content</p>",
	};
</script>

<div class="card w-96 bg-base-100 shadow-xl h-fit">
	<figure class="px-10 pt-10">
		<img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title">{data.page.title}</h2>
		<div>
			{@html data.page.content}
		</div>
	</div>
</div>
