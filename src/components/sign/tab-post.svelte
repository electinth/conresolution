<script>
  import Button from '../button.svelte'
  import ExternalLink from '../external-link.svelte'
  import PostStep from './post-step.svelte'
  import TabBody from './tab-body.svelte'

</script>

<div class="bg-blue-3 py-2 rounded-b-md ">
  <TabBody class="divide-blue-2 divide-y max-w-screen-md">
    <PostStep number="1">
      <p>
        ดาวน์โหลด แบบฟอร์ม <ExternalLink
          href="https://progressivemovement.in.th/wp-content/uploads/2021/04/เอกสารการลงลายมือชื่อของผู้เข้าชื่อเสนอกฎหมาย.pdf"
          class="font-bold inline hover:underline"
        >
          เอกสารการลงลายมือชื่อของผู้เข้าชื่อเสนอกฎหมาย</ExternalLink
        >
        หรือ เอกสารหมายเลข 7
      </p>
    </PostStep>
    <PostStep number="2">
      <p>พิมพ์ลงบนกระดาษ A4 หรือเปิดไฟล์</p>
    </PostStep>
    <PostStep number="3">
      <p>กรอกข้อมูล ในแบบฟอร์มให้ครบถ้วน</p>
    </PostStep>
    <PostStep number="4">
      <p>
        ลงลายมือชื่อหรือเขียนชื่อตัวบรรจง (สามารถเซ็นลายเซ็นอิเล็กทรอนิกส์ได้)
      </p>
    </PostStep>
    <PostStep number="5">
      <p>ส่งแบบฟอร์ม โดยวิธีใดก็ได้ เพียงวิธีเดียวเท่านั้น</p>
      <div>
        <p><span class="font-bold">5.1</span> ไฟล์หรือภาพถ่ายที่เห็นชัดเจน</p>
        <ul class="list-disc list-inside">
          <li>
            LINE : <ExternalLink
              href="https://page.line.me/resolutioncon"
              class="inline underline">@ResolutionCon</ExternalLink
            >
          </li>
          <li>
            ข้อความเพจเฟซบุ๊ก <ExternalLink
              href="https://www.facebook.com/resolutionconstitution/"
              class="inline underline"
              >"Re-Solution ถึงเวลารัฐธรรมนูญใหม่"</ExternalLink
            >
          </li>
          <li>
            อินบอกซ์ทวิตเตอร์ <ExternalLink
              href="https://twitter.com/ResolutionCons"
              class="inline underline">@ResolutionCons</ExternalLink
            >
          </li>
          <li>
            ข้อความ Instagram <ExternalLink
              href="https://www.instagram.com/resolutioncon/"
              class="inline underline">@ResolutionCon</ExternalLink
            >
          </li>
          <li>
            อีเมล <ExternalLink
              href="mailto:resolutionconstitution@gmail.com"
              class="inline underline"
              >resolutionconstitution@gmail.com</ExternalLink
            >
          </li>
        </ul>
      </div>

      <p>
        <span class="font-bold">5.2</span> ส่งเอกสารทางจดหมาย ผ่านบริการขนส่งใดก็ได้
        มาที่
      </p>

      <p>
        Re-Solution สำนักงานคณะก้าวหน้า<br />
        1768 อาคารไทยซัมมิททาวเวอร์ ชั้นที่ 5<br />
        ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง<br />
        กรุงเทพมหานคร 10310<br />
        เบอร์ผู้รับ 098-9757909
      </p>
      <ul class="list-disc ml-4">
        <li>สามารถส่งเอกสารของหลายคนมาในซองเดียวกันได้</li>
        <li>
          ส่งช่องทางไหนก็ได้ ใช้บริการบริษัทเอกชน
          หรือบริการขนส่งระบบใดในการส่งจดหมายก็ได้
        </li>
        <li>สามารถส่งแบบธรรมดา ไม่จำเป็นต้องแบบด่วนพิเศษหรือลงทะเบียนตอบรับ</li>
      </ul>

      <p><span class="font-bold">5.3</span> ไปลงชื่อที่จุดตั้งโต๊ะทั่วประเทศ</p>
    </PostStep>
    <div class="flex flex-col text-center space-y-4 text-b2">
      <ExternalLink
        href="https://progressivemovement.in.th/wp-content/uploads/2021/04/เอกสารการลงลายมือชื่อของผู้เข้าชื่อเสนอกฎหมาย.pdf"
      >
        <Button
          class="bg-green-3 text-white border-green-3 hover:(bg-black text-white border-black)"
          >ดาวน์โหลดแบบฟอร์ม</Button
        ></ExternalLink
      >
      <ExternalLink
        href="https://progressivemovement.in.th/wp-content/uploads/2021/06/วิธีการกรอกแบบฟอร์มแก้รัฐธรรมนูญ.pdf"
      >
        <Button class="text-green-2 border border-green-2 hover:bg-white"
          >ดูตัวอย่างและวิธีการกรอกแบบฟอร์ม
        </Button></ExternalLink
      >
      <ExternalLink
        href="https://progressivemovement.in.th/wp-content/uploads/2021/04/แผ่นพับ_Createoutline.pdf"
        ><Button class="text-green-2 border border-green-2 hover:bg-white"
          >แผ่นพับ ทำไมต้องรื้อระบอบประยุทธ์?
        </Button>
      </ExternalLink>
      <ExternalLink
        href="https://progressivemovement.in.th/wp-content/uploads/2021/04/Draft_Constitution_Resolution2564.pdf"
        class="text-b3 text-green-2 hover:underline"
        >ดูร่างรัฐธรรมนูญแก้ไขเพิ่มเติม ฉบับเต็ม
      </ExternalLink>
    </div>
  </TabBody>
</div>
