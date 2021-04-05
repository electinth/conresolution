<script>
  import ExternalLink from '../components/external-link.svelte'
  import FollowUs from '../components/follow-us.svelte'
  import Layout from '../components/layout.svelte'

  const links = [
    {
      alt: 'Resolution',
      src: 'images/logo-resolution.png',
      href: 'https://www.facebook.com/resolutionconstitution/',
    },
    { alt: 'iLaw', src: 'images/logo-ilaw.png', href: 'https://ilaw.or.th/' },
    {
      alt: 'CONLAB',
      src: 'images/logo-conlab.png',
      href: 'https://www.facebook.com/Constitution9Face/',
    },
    {
      alt: 'คณะก้าวหน้า',
      src: 'images/logo-klaona.png',
      href: 'https://progressivemovement.in.th/',
    },
    {
      alt: 'พรรคก้าวไหล',
      src: 'images/logo-klaokrai.png',
      href: 'https://www.moveforwardparty.org/',
    },
    {
      alt: 'ELECT',
      src: 'images/logo-elect.png',
      href: 'https://elect.in.th/',
    },
  ]
</script>

<Layout class="bg-black divide-white divide-y-1">
  <div class="flex justify-center">
    <FollowUs />
  </div>

  <div
    class="grid grid-cols-2 py-6 md:(py-12 grid-cols-6) w-full max-w-screen-xl mx-auto"
  >
    {#each links as { alt, src, href }}
      <ExternalLink {href} class="m-auto max-w-16 -md:py-3 md:max-w-24">
        <img {src} {alt} />
      </ExternalLink>
    {/each}
  </div>
</Layout>
