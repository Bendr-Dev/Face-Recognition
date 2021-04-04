<script lang="ts">
    import { onMount } from "svelte";
    import * as faceapi from 'face-api.js';
    import type { WithFaceDescriptor, WithFaceLandmarks, FaceLandmarks68, FaceDetection } from 'face-api.js';
    import { labeledDescriptors } from "./faceStore";
import { generateColorHex } from "./utilities";

    const detectAllFaces = async (video, canvas) => {
        const allFaces: WithFaceDescriptor<WithFaceLandmarks<{ detection: FaceDetection }, FaceLandmarks68>>[] = 
        await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
        faceapi.matchDimensions(canvas, { width:650, height:450});
        const fullFaceDescriptions = faceapi.resizeResults(allFaces, {width:650, height:450});
        faceapi.draw.drawDetections(canvas, fullFaceDescriptions);
    };
    
    const updateFaceStore = (faceDescriptors: WithFaceDescriptor<WithFaceLandmarks<{ detection: FaceDetection }, FaceLandmarks68>>[]) => {
        if (!faceDescriptors.length) {
            return;
        }

        faceDescriptors.forEach(faceDescriptor => {
            const hexString: string = generateColorHex();
            const labeledDescriptor = new faceapi.LabeledFaceDescriptors(hexString, [faceDescriptor.descriptor]);
        });
    };

    onMount(async () => {
        try {
            const canvas = document.querySelector("#canvas");
            const video: HTMLMediaElement = document.querySelector("#videoEl") as HTMLMediaElement;
            if (navigator.mediaDevices.getUserMedia) {
                const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
            } else {
                // TODO: Display message saying no media devices found
            }
            
            setInterval(async () => {
                await detectAllFaces(video, canvas);
            }, 300);
        } catch (error) {
            console.error(error);
        }
    });
</script>

<main>
    <canvas id="canvas" class="overlay"></canvas>
    <video autoplay={true} id="videoEl"> 
        <track kind="captions">
    </video>
</main>

<style>
    main {
        max-width: 600px;
        height: 450px;
        border: 2px solid var(--primary-color);
        padding: 0.5rem;
    }

    .overlay {
        position: absolute;
        width: 600px;
        height: 450px;
    }

    video {
        width: 600px;
        height: 450px;
        background-color: var(--text-color);
    }
</style>