<script lang="ts">
  import Sharer from '../components/landing/sharer.svelte'
  import countData from '../assets/data/count.json'
  import FollowUs from '../components/follow-us.svelte'
  import LottieCar from '../components/landing/lottie-car.svelte'
  import Button from '../components/button.svelte'
  import { formatThaiDate } from '../utils/date'
</script>

<section class="text-center h-screen flex bg-black relative">
  <div class="absolute inset-0 flex flex-row">
    <div
      class="bg-white flex flex-col justify-end justify-end bg-gradient-to-b from-white to-blue-3 bg-opacity-80"
    >
      <LottieCar />
    </div>
    <div class="flex-1 bg-black">
      <img
        src="images/brick-wall.png"
        alt="Brick wall"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
  <div class="absolute inset-0 flex">
    <div class="m-auto space-y-6 text-green-3">
      <div class="space-y-2">
        <h1 class="text-h4">ร่วมรื้อระบอบประยุทธ์</h1>
        <h1 class="text-h4">สิ้นสุดระบบเผด็จการ</h1>
      </div>

      <div
        class="flex flex-col justify-center -md:space-y-4 md:(flex-row space-x-4)"
      >
        <p class="text-h5 my-auto">มีแล้วกว่า</p>
        <p class="text-number">{countData.count.toLocaleString('th-TH')}</p>
        <p class="text-h5 my-auto">รายชื่อ</p>
      </div>

      <p class="text-b4">
        อัปเดทข้อมูลล่าสุด {formatThaiDate(countData.lastUpdated)}
      </p>

      <div class="space-y-4">
        <div class="flex flex-col -md:space-y-2 md:(flex-row space-x-2)">
          <Button class="md:w-64 bg-neon text-green-1 mx-auto">ลงชื่อ</Button>
          <Button class="md:w-64 text-neon border border-neon mx-auto">
            ร่วมเป็นอาสาสมัคร
          </Button>
        </div>

        <a href="/#" class="text-b3 underline block">
          อ่านคำอธิบายร่างแก้ไขเพิ่มเติมรัฐธรรมนูญรายมาตรา
        </a>
      </div>
      <div class="flex justify-center">
        <Sharer />
      </div>
    </div>
  </div>
  <div class="absolute top-4 right-4">
    <FollowUs />
  </div>
</section>
