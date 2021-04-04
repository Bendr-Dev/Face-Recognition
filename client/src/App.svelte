<script lang="ts">
	import WebCam from "./WebCam.svelte";
	import { loadFaceLandmarkModel, loadFaceRecognitionModel, loadTinyFaceDetectorModel } from 'face-api.js';
	import { onMount } from "svelte";

	const loadModels = async () => {
		try {
			await loadFaceLandmarkModel("../../models");
			await loadFaceRecognitionModel("../../models");
			await loadTinyFaceDetectorModel("../../models");
		} catch (error) {
			console.error(error);
		}
	}

	onMount(async () => {
		await loadModels();
	});
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