<template>
  <div class="loader">
    <svg viewBox="0 0 32 32" width="32" height="32">
      <circle class="spinner" cx="16" cy="16" r="14" fill="none"></circle>
    </svg>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .loader {
    left: 50%;
    top: 50%;
    position: fixed;
    transform: translate(-50%, -50%);

    .spinner {
      box-sizing: border-box;
      stroke: #673AB7;
      stroke-width: 3px;
      transform-origin: 50%;
      animation: line 1s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1s linear infinite;
    }

    @keyframes rotate {
      from {
        -webkit-transform: rotate(0);
                transform: rotate(0);
      }
      to {
        -webkit-transform: rotate(450deg);
                transform: rotate(450deg);
      }
    }

    @keyframes line {
      0% {
        stroke-dasharray: 2, 85.964;
        -webkit-transform: rotate(0);
                transform: rotate(0);
      }
      50% {
        stroke-dasharray: 65.973, 21.9911;
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dasharray: 2, 85.964;
        stroke-dashoffset: -65.973;
        -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
      }
    }
  }
</style>
