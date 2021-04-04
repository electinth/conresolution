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
      class="bg-white flex flex-col justify-end justify-end bg-gradient-to-b from-white to-blue-3 bg-opacity-80 md:w-1/8"
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
        <h1 class="text-h4 mx-auto max-w-xs md:max-w-md">
          ขอคนละชื่อ รื้อระบอบประยุทธ์ หยุดยื้อเวลาเผด็จการ
        </h1>
      </div>

      <div
        class="flex flex-col justify-center text-blue-1 -md:space-y-4 md:(flex-row space-x-4)"
      >
        <p class="text-h5 my-auto">มีแล้วกว่า</p>
        <p class="text-number">{countData.count.toLocaleString('th-TH')}</p>
        <p class="text-h5 my-auto">รายชื่อ</p>
      </div>

      <p class="text-b4">
        อัปเดทข้อมูลล่าสุด {formatThaiDate(countData.lastUpdated)}
      </p>

      <div class="space-y-4">
        <div
          class="flex flex-col mx-auto -md:(space-y-2 max-w-64) md:(flex-row space-x-2 w-screen-sm)"
        >
          <a href="#sign" class="flex-1">
            <Button class="bg-neon text-green-1 w-full">ลงชื่อ</Button>
          </a>
          <a href="#volunteer" class="flex-1">
            <Button class="text-neon border border-neon">
              ร่วมเป็นอาสาสมัคร
            </Button>
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/drive/u/0/folders/1c8sxaw8SileWT9U6GildCO1klR77BUgm"
            class="text-b3 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            อ่านร่างรัฐธรรมนูญแก้ไขเพิ่มเติม ฉบับเต็ม
          </a>
        </div>
      </div>
      <div class="flex justify-center pt-4">
        <Sharer />
      </div>
    </div>
  </div>
  <div class="absolute top-4 right-4">
    <FollowUs />
  </div>
</section>
