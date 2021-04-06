<script lang="ts"></script>

<section>
  <h2>About</h2>
  <p>
    This application utilizes a real-time, multi-facial recognition system. This
    is achieved through face-api.js which is a library built on top of the
    tensorflow.js core api <a
      href="https://justadudewhohacks.github.io/face-api.js/docs/index.html"
      target="_blank"
      rel="noopener">(face-api.js)</a
    >
    <br />
    <a
      href="https://github.com/Bendr-Dev/Face-Recognition"
      target="_blank"
      rel="noopener">(source code)</a
    >
  </p>
</section>

<style>
  section {
    grid-area: info;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin: 0;
    font-weight: 100;
    color: var(--text-color);
  }

  p {
    line-height: 2;
    color: var(--text-color);
    padding: 1rem;
  }

  a,
  a:focus,
  a:visited,
  a:active {
    color: var(--primary-color);
  }
</style>
