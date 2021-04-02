<script lang="ts">
import { onMount } from "svelte";


    const video = document.querySelector("#videoEl") as HTMLMediaElement;

    onMount(async () => {
        if (navigator.mediaDevices.getUserMedia) {
           const stream = await navigator.mediaDevices.getUserMedia({ video: true });
           video.srcObject = stream;
        }
    })
</script>

<main>
    <video autoplay={true} id="videoEl"> 
        <track kind="captions">
    </video>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 516px;
        height: 391px;
        border: 2px solid var(--primary-color);
        padding: 1rem;
    }

    video {
        width: 500px;
        height: 375px;
        background-color: var(--text-color);
    }
</style>