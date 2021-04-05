<script lang="ts">
  import { onMount } from "svelte";
  import { labeledDescriptors } from "../descriptors";
  import type { CanvasType, PipelineData, VideoFeed } from "../pipeline";
  import { runPipeline } from "../pipeline";

  onMount(async () => {
    try {
      // Grab DOM nodes
      const canvas: CanvasType = document.querySelector("#canvas");
      const video: VideoFeed = document.querySelector("#videoEl") as VideoFeed;

      // Create data structure for pipeline
      const data: PipelineData = {
        video: video,
        canvas: canvas,
        videoWidth: 650,
        videoHeight: 450,
        facesDetected: null,
        labeledDescriptors: $labeledDescriptors,
      };

      // Check if client has camera
      if (navigator.mediaDevices.getUserMedia) {
        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        video.srcObject = stream;
      } else {
        // TODO: Display message saying no media devices found
      }

      // Run pipeline every 300ms to update facial recognition computation
      setInterval(async () => {
        await runPipeline(data);
      }, 200);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<section>
  <main>
    <canvas id="canvas" class="overlay" />
    <video autoplay={true} id="videoEl">
      <track kind="captions" />
    </video>
  </main>
</section>

<style>
  section {
    grid-area: webcam;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    width: 600px;
    height: 450px;
    border: 2px solid var(--primary-color);
    filter: drop-shadow(0 0 1rem #950740);
  }

  .overlay {
    position: absolute;
    width: 600px;
    height: 450px;
  }

  video {
    width: 600px;
    height: 450px;
    background-color: #000;
  }
</style>
