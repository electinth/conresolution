<script lang="ts">
  import Sharer from '../components/landing/sharer.svelte'
  // import countData from '../assets/data/count.json'
  import FollowUs from '../components/follow-us.svelte'
  import Button from '../components/button.svelte'
  // import { formatThaiDate } from '../utils/date'
</script>

<section
  class="text-center h-screen flex bg-black relative bg-no-repeat bg-cover bg-center px-6"
>
  <div class="m-auto space-y-6">
    <img
      src="images/banner.png"
      alt="ขอคนละชื่อ รื้อระบอบประยุทธ์"
      class="max-w-lg mx-auto w-full"
    />

    <!-- <div
      class="flex flex-col justify-center text-blue-1 -md:space-y-4 md:(flex-row space-x-4)"
    >
      <p class="text-h5 my-auto">มีแล้วกว่า</p>
      <p class="text-number">{countData.count.toLocaleString('th-TH')}</p>
      <p class="text-h5 my-auto">รายชื่อ</p>
    </div>

    <p class="text-b4">
      อัปเดทข้อมูลล่าสุด {formatThaiDate(countData.lastUpdated)}
    </p> -->

    <div class="space-y-4">
      <div
        class="flex flex-col mx-auto -md:(space-y-2 max-w-64) md:(flex-row space-x-2 w-screen-sm)"
      >
        <a href="#sign" class="flex-1">
          <Button
            class="bg-black text-neon border-3 border-black hover:(bg-neon text-black border-neon)"
            >ลงชื่อ</Button
          >
        </a>
        <a href="#volunteer" class="flex-1">
          <Button class="border-3 hover:bg-white">ร่วมเป็นอาสาสมัคร</Button>
        </a>
      </div>
      <div>
        <a
          href="https://progressivemovement.in.th/wp-content/uploads/2021/04/Draft_Constitution_Resolution2564.pdf"
          class="text-b4 underline bg-white px-2 py-1 bg-opacity-50 rounded"
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
  <div class="absolute top-4 right-4">
    <FollowUs dark />
  </div>
</section>

<style>
  section {
    background-image: url('/images/landing-bg.jpg');
  }
</style>
