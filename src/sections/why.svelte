<script>
  import NumberCard from '../components/why/number-card.svelte'
  import Layout from '../components/layout.svelte'

  const reasons = [
    'ประเทศไม่เป็นประชาธิปไตย ประชาชนไม่มี 1 สิทธิ์ 1 เสียงเท่าเทียมกัน',
    'ระบบตรวจสอบถ่วงดุลอำนาจไม่ทำงาน',
    'การทุจริตคอร์รัปชันยังมีประปราย',
    'ท้องถิ่นไม่มีอำนาจจัดการปัญหาตนเอง',
    'นโยบายเศรษฐกิจ - สังคม ก้าวไม่ทันโลก',
    'ปัญหาปากท้องประชาชน ไม่ได้รับการแก้ไข',
    'สร้างความขัดแย้งเพิ่มเติมให้สังคม',
  ]
</script>

<Layout class="bg-green-2 space-y-8">
  <h2 class="text-h4 text-white text-center">ทำไมต้องรื้อระบอบประยุทธ์</h2>

  <div class="grid grid-cols-7">
    {#each reasons as reason, index}
      <NumberCard number={index + 1}>{reason}</NumberCard>
    {/each}
  </div>
</Layout>
