<script lang="ts">
  import countData from '../assets/count.json'

  const TARGET_COUNT = 50000

  const lastUpdated = new Date(countData.lastUpdated).toLocaleDateString(
    'th-TH'
  )

  const targetText = TARGET_COUNT.toLocaleString('en')
  const currentText = countData.count.toLocaleString('en')
  const leftText = Math.max(TARGET_COUNT - countData.count, 0).toLocaleString(
    'en'
  )
</script>

<section class="text-center h-screen flex bg-green-1">
  <div class="m-auto space-y-2 text-green-3">
    <h1 class="text-h4">
      ร่วมรื้อระบอบประยุทธ์<br />สิ้นสุดระบบเผด็จการ
    </h1>

    <p>
      ต้องการ <span class="font-bold">{targetText}</span>
      รายชื่อ
    </p>

    <div class="flex flex-row justify-center">
      <p class="text-h5 my-auto">มีแล้วกว่า</p>
      <p class="text-number">{currentText}</p>
      <p class="text-h5 my-auto">รายชื่อ</p>
    </div>

    <p>ขาดอีก <span class="font-bold">{leftText}</span> รายชื่อ</p>

    <p class="text-b4">อัปเดทข้อมูลล่าสุด {lastUpdated}</p>

    <button class="rounded-lg bg-neon text-green-1 py-4 w-48 font-bold"
      >ลงชื่อ</button
    >

    <a href="/#" class="text-b3 underlined block"
      >อ่านคำอธิบายร่างแก้ไขเพิ่มเติมรัฐธรรมนูญรายมาตรา</a
    >
  </div>
</section>
