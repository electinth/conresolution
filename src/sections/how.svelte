<script>
  import SlideCover from '../components/slide-cover.svelte'
  import HorizontalScroll from '../components/horizontal-scroll.svelte'
  import Layout from '../components/layout.svelte'
  import SlideFull from '../components/slide-full.svelte'
  import SlideSmall from '../components/slide-small.svelte'
</script>

<Layout class="bg-green-1 space-y-8 overflow-x-hidden">
  <h2 class="text-h4 text-white text-center max-w-screen-sm mx-auto">
    เพื่อทำลายระบอบประยุทธ์ เราสามารถริเริ่มได้ด้วยการแก้รัฐธรรมนูญ
    ภายใต้หลักคิด 3 ข้อ
  </h2>
  <HorizontalScroll>
    <SlideCover heading1="ยุบ" heading2="วุฒิสภา">Slide 1</SlideCover>
    <SlideFull>Slide 2</SlideFull>
    <SlideSmall
      label="ข้อดี 1"
      title="ปัจจุบัน ส.ว. 1 คน มีอำนาจเท่ากับประชาชน 70,000 คน ในการตัดสินว่าใครจะเป็นผู้นำประเทศ"
      >ปัจจุบัน ส.ว. 1 คน มีอำนาจเท่ากับประชาชน 70,000 คน
      ในการตัดสินว่าใครจะเป็นผู้นำประเทศ</SlideSmall
    >
  </HorizontalScroll>
</Layout>
