<script>
  import SlideCover from '../components/how/slide-cover.svelte'
  import HorizontalScroll from '../components/how/horizontal-scroll.svelte'
  import Layout from '../components/layout.svelte'
  import SlideSmall from '../components/how/slide-small.svelte'
  import Slice from '../components/how/slice.svelte'
  import SlideFullContent from '../components/how/slide-full-content.svelte'

  import advantage1 from '../assets/data/advantage1.json'
  import advantage2 from '../assets/data/advantage2.json'
  import advantage3 from '../assets/data/advantage3.json'
  import advantage4 from '../assets/data/advantage4.json'
</script>

<Layout
  heading="ผนึกกำลังประชาชนเข้าชื่อแก้รัฐธรรมนูญ เพื่อจัดการกับ 4 ประเด็นหลักที่เป็นอุปสรรคของการเมืองไทยในปัจจุบัน"
  class="bg-black overflow-x-hidden"
>
  <HorizontalScroll>
    <SlideCover heading1="ล้ม" heading2="วุฒิสภา">
      <svg
        slot="number"
        viewBox="0 0 101 249"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.3037 54.7745H0V0H101V248.777H36.3037V54.7745Z"
          fill="white"
        />
      </svg>
      <Slice label="ปัจจุบัน" class="flex-1">
        <img src="images/1-now.png" alt="ปัจจุบัน" />
        <p>
          มีสมาชิกวุฒิสภา (ส.ว.) 250 คน ที่<span class="font-bold"
            >มาจากกระบวนการการ แต่งตั้งของ คสช.</span
          >
        </p>
      </Slice>
      <Slice label="อนาคต" class="flex-1">
        <img src="images/1-future.png" alt="อนาคต" />
        <p>
          <span class="font-bold">“สภาเดี่ยว”</span>
          ที่มีแค่สมาชิกสภาผู้แทนราษฎร (ส.ส.) 500 คน ซึ่ง<span class="font-bold"
            >มาจากการเลือกตั้งของประชาชนทั้งหมด</span
          >
        </p>
      </Slice>
    </SlideCover>
    {#each advantage1 as { title, description }, index}
      <SlideSmall number={index + 1} {title}>
        {description}
      </SlideSmall>
    {/each}
  </HorizontalScroll>

  <HorizontalScroll>
    <SlideCover heading1="โละ" heading2="ศาลรัฐธรรมนูญ องค์กรอิสระ">
      <svg
        slot="number"
        viewBox="0 0 164 255"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M118.88 199.925L159.811 161.451C161.255 160.073 162.64 158.707 164 157.342V20.754C156.596 14.8796 148.169 10.1413 138.695 6.57554C127.006 2.18782 114.293 0 100.533 0C86.5686 0 73.7356 2.2966 62.0583 6.9019C50.381 11.5072 40.2807 18.0827 31.7695 26.6285C23.2583 35.1743 16.6492 45.3761 11.9542 57.2096C7.25919 69.0432 4.91169 82.1943 4.91169 96.6629H74.9996C74.3496 92.0576 74.0125 88.5522 74.0125 86.1348C74.0125 77.589 76.4683 70.4695 81.38 64.7642C86.2917 59.0711 93.1175 56.2185 101.845 56.2185C106.432 56.2185 110.417 57.0404 113.8 58.6843C117.182 60.3282 120.072 62.516 122.479 65.2598C124.875 68.0037 126.681 71.1222 127.885 74.6275C129.076 78.1329 129.69 81.7591 129.69 85.482C129.69 88.9874 129.149 93.2663 128.053 98.3067C126.958 103.347 124.177 109.923 119.698 118.033C115.22 126.144 108.394 136.068 99.2331 147.793C90.0598 159.517 77.3953 173.829 61.2397 190.703L0 254.5H164V199.925H118.88Z"
          fill="white"
        />
      </svg>
      <Slice label="ปัจจุบัน" class="flex-1">
        <p>
          บุคคลที่ดำรงตำแหน่งในองค์กรเหล่านี้ไม่มีความยึดโยงกับ ประชาชน
          เพราะถูกคัดเลือก โดย“คณะกรรมการสรรหา” และ “สมาชิกวุฒิสภา” (ส.ว.)
        </p>
        <img src="images/2-now.png" alt="ปัจจุบัน" />
      </Slice>
      <Slice label="อนาคต" class="flex-1">
        <p>
          ให้ประชาชนมีส่วนร่วม โดยให้สมาชิกสภาผู้แทนราษฎร (ส.ส.)
          ที่มาจากการเลือกตั้งของ
          ประชาชนร่วมคัดเลือกบุคคลเข้าไปทำหน้าที่ในศาลรัฐธรรมนูญ และองค์กรอิสระ
        </p>
        <img src="images/2-future.png" alt="อนาคต" />
      </Slice>
    </SlideCover>
    <SlideFullContent
      text1="กระบวนการสรรหา และรับรอง"
      text2="ตุลาการศาลรัฐธรรมนูญ"
    >
      <Slice label="ปัจจุบัน" class="flex-3">
        <img src="images/2-court-now.png" alt="ปัจจุบัน" />
      </Slice>
      <Slice label="อนาคต" class="flex-4">
        <img src="images/2-court-future.png" alt="อนาคต" />
      </Slice>
    </SlideFullContent>
    <SlideFullContent
      text1="กระบวนการสรรหา และรับรอง"
      text2="กรรมการองค์กรอิสระ (กกต. / ปปช. / สตง. / ผู้ตรวจการแผ่นดิน / กสม.)"
    >
      <Slice label="ปัจจุบัน" class="flex-2">
        <img src="images/2-organization-now.png" alt="ปัจจุบัน" />
      </Slice>
      <Slice label="อนาคต" class="flex-5">
        <img src="images/2-organization-future.png" alt="อนาคต" />
      </Slice>
    </SlideFullContent>
    {#each advantage2 as { title, description }, index}
      <SlideSmall number={index + 1} {title}>
        {description}
      </SlideSmall>
    {/each}
  </HorizontalScroll>

  <HorizontalScroll>
    <SlideCover heading1="เลิก" heading2="ยุทธศาสตร์ชาติ แผนปฏิรูปประเทศ">
      <svg
        slot="number"
        viewBox="0 0 150 262"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M134.467 5.10617C124.472 1.70609 113.34 0 101.047 0C88.5474 0 77.1371 1.81499 66.8159 5.43287C56.4946 9.05075 47.5044 14.3142 39.8209 21.2354C32.1374 28.1445 25.8334 36.6507 20.8966 46.7421C15.9598 56.8334 12.717 68.3647 11.1803 81.2995H70.7604C70.7604 72.9626 73.1683 66.1625 77.9962 60.8869C82.8241 55.6234 89.1887 52.9856 97.0899 52.9856C104.543 52.9856 110.642 55.2846 115.361 59.8947C120.08 64.5048 122.439 70.5426 122.439 77.9962C122.439 85.6797 119.91 91.9353 114.865 96.7632C109.819 101.591 103.237 103.999 95.1176 103.999C94.2343 103.999 93.1937 103.999 91.9958 103.999C90.7858 103.999 89.3097 103.89 87.5552 103.672V144.159C89.9631 143.723 92.1652 143.336 94.1375 143.009C96.1098 142.682 98.191 142.513 100.393 142.513C109.166 142.513 116.74 145.26 123.105 150.741C129.469 156.234 132.652 164.353 132.652 175.098C132.652 184.101 130.014 191.675 124.75 197.81C119.487 203.957 111.138 207.03 99.7398 207.03C88.983 207.03 80.4283 204.017 74.0637 197.979C67.6992 191.941 64.2991 183.12 63.8635 171.48H0C0 178.946 0.713896 186.291 2.14169 193.539C3.56948 200.774 6.36457 208.022 10.539 215.258C19.7592 231.496 32.0406 243.354 47.4076 250.808C62.7624 258.261 79.9927 262 99.0864 262C113.352 262 126.456 260.028 138.423 256.071C142.465 254.74 146.3 253.203 149.967 251.485V12.2209C145.236 9.40165 140.081 7.01796 134.467 5.10617Z"
          fill="white"
        />
      </svg>

      <Slice label="ปัจจุบัน" class="flex-1">
        <p>
          กำหนดยุทธศาสตร์ชาติ 20 ปี ที่
          <span class="font-bold">“ทำตามก็พัง ไม่ทำตามก็ผิด”</span>
        </p>
        <img src="images/3-now.png" alt="ปัจจุบัน" />
      </Slice>
      <Slice label="อนาคต" class="flex-1">
        <p>
          <span class="font-bold">"ทำได้ทันที ทำไม่ดีก็โดนไล่"</span> รัฐมีความยืดหยุ่นในการออกแบบนโยบายให้สอดรับกับสถานการณ์
        </p>
        <img src="images/3-future.png" alt="อนาคต" />
      </Slice>
    </SlideCover>
    {#each advantage3 as { title, description }, index}
      <SlideSmall number={index + 1} {title}>
        {description}
      </SlideSmall>
    {/each}
  </HorizontalScroll>

  <HorizontalScroll>
    <SlideCover heading1="ล้าง" heading2="มรดกรัฐประหาร">
      <svg
        slot="number"
        viewBox="0 0 295 498"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M295.435 497.55H180.793V396.686H0V291.626L150.18 0H295.435V497.55ZM186.906 289.71V196.585C186.906 192.291 187.173 185.426 187.706 175.965C188.24 166.505 189.04 154.376 190.132 139.555L170.144 182.103C160.246 202.94 150.374 222.346 140.501 240.273C130.604 258.223 120.731 274.694 110.858 289.734H186.906V289.71Z"
          fill="white"
        />
      </svg>

      <div
        class="flex flex-col space-y-6 m-auto text-center p-3 max-w-xs md:max-w-md"
      >
        <p>
          หยุดวงจรอุบาทว์ขวางประชาธิปไตย ยกเลิกผลพวงการรัฐประหารโดย คสช. ทั้งหมด
        </p>
        <img src="images/4.png" alt="ยกเลิกผลพวงการรัฐประหารโดย คสช." />
      </div>
    </SlideCover>
    {#each advantage4 as { title, description }, index}
      <SlideSmall number={index + 1} {title}>
        {description}
      </SlideSmall>
    {/each}
  </HorizontalScroll>
</Layout>

<style>
  svg {
    @apply h-72 ml-auto;
  }

  @media (min-width: 768px) {
    svg {
      height: 40vw;
    }
  }
</style>
