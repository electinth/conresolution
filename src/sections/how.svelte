<script>
  import HorizontalScroll from '../components/horizontal-scroll.svelte'
  import Layout from '../components/layout.svelte'
</script>

<Layout class="bg-green-1 space-y-8 overflow-x-hidden">
  <h2 class="text-h4 text-white text-center max-w-screen-sm mx-auto">
    เพื่อทำลายระบอบประยุทธ์ เราสามารถริเริ่มได้ด้วยการแก้รัฐธรรมนูญ
    ภายใต้หลักคิด 3 ข้อ
  </h2>
  <HorizontalScroll>
    <div class="bg-white rounded-lg p-10 w-screen-xl">Slide 1</div>
    <div class="bg-white rounded-lg p-10 w-screen-xl">Slide 2</div>
    <div class="bg-white rounded-lg p-10 w-64">Slide 3</div>
    <div class="bg-white rounded-lg p-10 w-64">Slide 4</div>
  </HorizontalScroll>
</Layout>
