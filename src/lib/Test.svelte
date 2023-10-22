<script>
	import Folder from "./Folder.svelte";
	import { files } from "./menu.js";
</script>

<Folder name="Home" {files} expanded />
