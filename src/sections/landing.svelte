<script lang="ts">
  import countData from '../assets/data/count.json'

  const TARGET_COUNT = 50000
  const LOCALE = 'th-TH'

  const lastUpdatedText = new Date(countData.lastUpdated).toLocaleDateString(
    LOCALE,
    {
      year: '2-digit',
      month: 'short',
      day: 'numeric',
    }
  )

  const targetText = TARGET_COUNT.toLocaleString(LOCALE)
  const currentText = countData.count.toLocaleString(LOCALE)
  const leftText = Math.max(TARGET_COUNT - countData.count, 0).toLocaleString(
    LOCALE
  )
</script>

<section class="text-center h-screen flex bg-green-1">
  <div class="m-auto space-y-8 text-green-3">
    <div class="space-y-2">
      <h1 class="text-h4">ร่วมรื้อระบอบประยุทธ์</h1>
      <h1 class="text-h4">สิ้นสุดระบบเผด็จการ</h1>
    </div>

    <div class="space-y-4">
      <p>
        ต้องการ <span class="font-bold">{targetText}</span>
        รายชื่อ
      </p>
      <div class="flex flex-row justify-center space-x-4">
        <p class="text-h5 my-auto">มีแล้วกว่า</p>
        <p class="text-number">{currentText}</p>
        <p class="text-h5 my-auto">รายชื่อ</p>
      </div>
      <p>ขาดอีก <span class="font-bold">{leftText}</span> รายชื่อ</p>
    </div>

    <p class="text-b4">อัปเดทข้อมูลล่าสุด {lastUpdatedText}</p>

    <div class="space-y-4">
      <button class="rounded-lg bg-neon text-green-1 py-4 w-48 font-bold"
        >ลงชื่อ</button
      >

      <a href="/#" class="text-b3 underline block"
        >อ่านคำอธิบายร่างแก้ไขเพิ่มเติมรัฐธรรมนูญรายมาตรา</a
      >
    </div>
  </div>
</section>
