<div class="rounded-lg overflow-hidden bg-blue-1 h-md md:h-lg">
  <slot />
</div>

<style>
  div {
    @apply w-screen-md max-w-screen-lg;
  }

  @media (min-width: 768px) {
    div {
      width: calc(100vw - 4rem);
    }
  }
</style>
