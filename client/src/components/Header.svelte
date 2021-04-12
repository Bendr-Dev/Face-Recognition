<script lang="ts"></script>

<header>
  <div />
  <div id="title">
    <h1>Real-Time Facial Recognition</h1>
  </div>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 96px;
    align-items: center;
    grid-area: header;
  }

  #title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    margin: 0;
    background-color: var(--primary);
  }

  h1 {
    margin: 0;
    margin-left: 1rem;
    color: #fff;
    font-size: 36px;
    font-weight: 500;
  }

  div:first-of-type {
    width: 100%;
    height: 16px;
    background-color: var(--dark-primary);
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 22px;
      margin: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 280px) {
    h1 {
      font-size: 18px;
      margin: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
