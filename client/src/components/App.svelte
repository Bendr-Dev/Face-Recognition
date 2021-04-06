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

  let isLoading = true;

  const loadModels = async () => {
    try {
      await loadFaceLandmarkModel("../../models");
      await loadFaceRecognitionModel("../../models");
      await loadTinyFaceDetectorModel("../../models");
      isLoading = false;
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
    {#if isLoading}
      <div class="loading">Loading Models...</div>
    {:else}
      <WebCam />
    {/if}
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

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
    font-size: 28px;
    font-weight: 100;
    width: 600px;
    height: 450px;
    border: 2px solid var(--primary-color);
    filter: drop-shadow(0 0 1rem #950740);
  }
</style>
