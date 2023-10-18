import { error } from "@sveltejs/kit";
import { pages } from "$lib/data.js";

export function load({ params }) {
	const page = pages.find((page) => page.page === params.page);

	if (!page) throw error(404);

	return {
		page,
	};
}
