<script lang="ts"></script>

<section>
  <div>
    <h2>About</h2>
    <p>
      This application utilizes a real-time, multi-facial recognition system.
      This is achieved through face-api.js which is a library built on top of
      the tensorflow.js core api. Developed by Brandon Endres.
      <br /><a
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
  </div>
</section>

<style>
  section {
    grid-area: info;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;
    align-items: center;
  }

  div {
    margin: 2rem;
  }

  h2 {
    margin: 0;
    padding-bottom: 0.5rem;
    font-weight: 400;
    color: var(--primary-text);
    border-bottom: 1px solid var(--divider);
  }

  p {
    line-height: 2;
    color: var(--primary-text);
    padding: 1rem;
  }

  a,
  a:focus,
  a:visited,
  a:active {
    color: var(--dark-primary);
  }
</style>
