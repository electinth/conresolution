<script lang="ts">
  export let number: string | number
  export let title: string
</script>

<div
  class="rounded-lg px-6 py-8 bg-blue-3 w-72 text-center space-y-6 h-md md:h-lg"
>
  <p class="text-green-3 font-bold">ข้อดี {number}</p>
  <p class="text-h6 font-bold">{title}</p>
  <p class="text-b2">
    <slot />
  </p>
</div>
