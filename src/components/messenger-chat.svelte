<script>
  import { onMount } from 'svelte'

  onMount(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v10.0',
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  })
</script>

<div id="fb-root" />

<div
  class="fb-customerchat"
  attribution="page_inbox"
  page_id="112486793957041"
/>
