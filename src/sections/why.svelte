<script>
  import NumberCard from '../components/why/number-card.svelte'
  import Layout from '../components/layout.svelte'

  const reasons = [
    'ประเทศไทยเป็นประชาธิปไตย ส.ว. 1 คนมีเสียงมากกว่าประชาชน 70,000 คน',
    'ระบบตรวจสอบถ่วงดุลอำนาจไม่ทำงาน',
    'เกิดการทุจริตเชิงนโยบาย',
    'ยุทธศาสตร์ชาติ 20 ปี ทำให้นโยบายไม่ทันโลก',
    'รัฐราชการรวมศูนย์ขายตัว',
    'ความเหลื่อมล้ำสูงขึ้น แก้ปัญหาปากท้องฉาบฉวย',
    'ประชาชนหมดความเชื่อมั่นในสถาบันการเมือง',
  ]
</script>

<Layout
  heading="ทำไมต้องรื้อระบอบประยุทธ์"
  headingClass="text-black"
  class="bg-neon"
>
  <div
    class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 w-full max-w-screen-xl m-auto"
  >
    {#each reasons as reason, index}
      <NumberCard number={index + 1}>{reason}</NumberCard>
    {/each}
  </div>
</Layout>
