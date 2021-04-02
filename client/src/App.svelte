<script lang="ts">
import WebCam from "./WebCam.svelte";

</script>

<main>
	<h1>Face Recognition</h1>
	<WebCam />
</main>

<style>
	main {
		text-align: center;
	}

	h1 {
		color: var(--primary-color);
		font-weight: 100;
		margin: 0;
	}
</style>