<script>
  import ExternalLink from '../components/external-link.svelte'
  import Button from '../components/button.svelte'
  import Layout from '../components/layout.svelte'
</script>

<Layout id="volunteer" heading="ร่วมเป็นอาสาสมัครกับเรา" class="bg-green-3">
  <p class="text-white text-center w-full max-w-screen-md mx-auto">
    นอกจากร่วมลงชื่อแล้ว<br />
    คุณยังสามารถร่วม "รื้อระบอบประยุทธ์ หยุดยื้อเวลาเผด็จการ" ไปอีกขั้น<br />
    โดยการร่วมเป็นอาสาสมัครในการตั้งโต๊ะลงชื่อของ Resolution<br />
    หรือหากคุณมีพื้นที่-สนใจอยากช่วยตั้งโต๊ะด้วยตัวเองก็สามารถทำได้เช่นกัน
  </p>
  <div class="flex flex-row space-x-2 w-full max-w-screen-lg mx-auto">
    <ExternalLink
      href="https://docs.google.com/forms/d/e/1FAIpQLSdtkFfvv2EduFgawSBK_w3QWccO7y5SkW14pR_ABx5s7oETOw/viewform"
      class="flex-1"
    >
      <Button class="bg-blue-3 hover:(bg-black text-white)"
        >สนใจเป็นอาสาสมัคร</Button
      >
    </ExternalLink>
    <ExternalLink
      href="https://docs.google.com/forms/d/e/1FAIpQLSeqfI9lkBlv4R1fzpH0C6-urxqZJPpR0CDqKwVpDM2OOS8xkw/viewform"
      class="flex-1"
    >
      <Button class="bg-blue-3 hover:(bg-black text-white)"
        >สนใจเปิดโต๊ะลงชื่อ</Button
      ></ExternalLink
    >
  </div>
</Layout>
