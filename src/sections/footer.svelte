<script>
  import FollowUs from '../components/follow-us.svelte'
  import Layout from '../components/layout.svelte'

  const logos = [
    { alt: 'Resolution', src: 'images/logo-resolution.png' },
    { alt: 'iLaw', src: 'images/logo-ilaw.png' },
    { alt: 'CONLAB', src: 'images/logo-conlab.png' },
    { alt: 'คณะก้าวหน้า', src: 'images/logo-klaona.png' },
    { alt: 'พรรคก้าวไหล', src: 'images/logo-klaokrai.png' },
    { alt: 'ELECT', src: 'images/logo-elect.png' },
  ]
</script>

<Layout class="bg-black divide-white divide-y-1">
  <div class="flex justify-center">
    <FollowUs />
  </div>

  <div
    class="flex justify-between py-6 md:py-12 w-full max-w-screen-xl mx-auto"
  >
    {#each logos as { alt, src }}
      <img {src} {alt} class="my-auto max-w-16 md:max-w-24" />
    {/each}
  </div>
</Layout>
