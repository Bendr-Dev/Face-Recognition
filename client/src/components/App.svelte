<script lang="ts">
  import WebCam from "./WebCam.svelte";
  import {
    loadFaceLandmarkModel,
    loadFaceRecognitionModel,
    loadTinyFaceDetectorModel,
  } from "face-api.js";
  import { onMount } from "svelte";
  import Header from "./Header.svelte";
  import Info from "./Info.svelte";

  const loadModels = async () => {
    try {
      await loadFaceLandmarkModel("../../models");
      await loadFaceRecognitionModel("../../models");
      await loadTinyFaceDetectorModel("../../models");
    } catch (error) {
      console.error(error);
    }
  };

  onMount(async () => {
    await loadModels();
  });
</script>

<main>
  <section>
    <Header />
    <WebCam />
    <Info />
  </section>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section {
    display: grid;
    grid-template-areas:
      "header header header header header header"
      "webcam webcam webcam info info info"
      "webcam webcam webcam info info info";

    width: 800px;
    height: 600px;
    text-align: center;
    background-color: var(--background-color);
  }
</style>
