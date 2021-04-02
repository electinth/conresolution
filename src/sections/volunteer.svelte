<script>
  import Button from '../components/button.svelte'
  import Layout from '../components/layout.svelte'
</script>

<Layout id="volunteer" heading="ร่วมเป็นอาสาสมัคร" class="bg-green-3">
  <p class="text-white text-center w-full max-w-screen-md mx-auto">
    นอกจากร่วมลงชื่อแล้วคุณยังสามารถส่งต่อแคมเปญ “รื้อระบอบประยุทธ์
    สิ้นสุดระบบเผด็จการ” ได้โดยการร่วมเป็นส่วนหนึ่งของทีมงาน Re-solution
    ในการตั้งโต๊ะลงชื่อ
    หรือสามารถตั้งโต๊ะได้ด้วยตัวเองโดยใช้คู่มือที่เราเตรียมไว้ให้
  </p>
  <div class="flex flex-row space-x-2 w-full max-w-screen-lg mx-auto">
    <Button class="bg-blue-3 text-green-1">สมัครเป็นทีมงาน</Button>
    <Button class="bg-blue-3 text-green-1"
      >ดูคู่มือการเปิดโต๊ะรับร่างด้วยตัวเอง</Button
    >
  </div>
</Layout>
