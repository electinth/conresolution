<script>
  import FollowUs from '../components/follow-us.svelte'
  import Layout from '../components/layout.svelte'

  const links = [
    { alt: 'Resolution', src: 'images/logo-resolution.png', href: '#' },
    { alt: 'iLaw', src: 'images/logo-ilaw.png', href: '#' },
    { alt: 'CONLAB', src: 'images/logo-conlab.png', href: '#' },
    { alt: 'คณะก้าวหน้า', src: 'images/logo-klaona.png', href: '#' },
    { alt: 'พรรคก้าวไหล', src: 'images/logo-klaokrai.png', href: '#' },
    { alt: 'ELECT', src: 'images/logo-elect.png', href: '#' },
  ]
</script>

<Layout class="bg-black divide-white divide-y-1">
  <div class="flex justify-center">
    <FollowUs />
  </div>

  <div
    class="flex justify-between py-6 md:py-12 w-full max-w-screen-xl mx-auto"
  >
    {#each links as { alt, src, href }}
      <a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        class="my-auto max-w-16 md:max-w-24"
      >
        <img {src} {alt} />
      </a>
    {/each}
  </div>
</Layout>
