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
		padding: 1em;
		max-width: 516px;
	}

	h1 {
		color: var(--primary-color);
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>