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
        ดาวน์โหลด <span class="font-bold">แบบฟอร์ม</span> .แบบฟอร์ม เอกสารการลงลายมือชื่อของผู้เข้าชื่อเสนอกฎหมาย
        หรือ เอกสารหมายเลข 7 และพิมพ์ลงกระดาษ A4
      </p>
    </PostStep>
    <PostStep number="2">
      <p>
        <span class="font-bold">กรอกข้อมูล</span> ในแบบฟอร์มให้ครบถ้วน ในส่วนชื่อร่างรัฐธรรมนูญที่เขียนว่า
        "(ฉบับที่...) พุทธศักราช..." ไม่ต้องกรอกข้อความใด
      </p>
    </PostStep>
    <PostStep number="3">
      <p>
        ถ่ายเอกสาร
        <span class="font-bold"
          >สำเนาบัตรประจำตัวประชาชนด้านหน้าลงบนกระดาษ A4</span
        >
        (สามารถใช้สำเนาบัตรประจำตัวประชาชนที่หมดอายุ หรือ สำเนาบัตรอื่น อาทิ ใบขับขี่
        สำเนาทะเบียนบ้าน บัตรประจำตัวข้าราชการ อย่างใดอย่างหนึ่งได้)
      </p>
    </PostStep>
    <PostStep number="4">
      <p>
        เซ็นรับรอง "สำเนาถูกต้อง" จากนั้นขีดคร่อมว่า
        “ใช้เพื่อเสนอร่างรัฐธรรมนูญแก้ไขเพิ่มเติมเท่านั้น”
      </p>
      <img
        src="images/post-example.png"
        alt="ตัวอย่าง"
        class="w-full max-w-sm mx-auto"
      />
    </PostStep>
    <PostStep number="5">
      <p>
        <span class="font-bold">ตรวจสอบลายเซ็นบน</span>บน "แบบฟอร์ม" และ
        "สำเนาบัตรประชาชน" ให้เหมือนกัน
      </p>
    </PostStep>
    <PostStep number="6">
      <p>
        ส่งเอกสารทั้งหมดมาที่<br />
        ขอคนละชื่อ รื้อระบอบประยุทธ์<br />
        ตู้ ปณ.33<br />
        ปณฝ.ประสานมิตร<br />
        กรุงเทพฯ<br />
        10114<br />
      </p>
      <ul class="list-disc list-inside">
        <li>สามารถส่งเอกสารของหลายคนมาในซองเดียวกันได้</li>
        <li>สามารถส่งแบบธรรมดา ไม่จำเป็นต้องแบบด่วนพิเศษหรือลงทะเบียนตอบรับ</li>
      </ul>
    </PostStep>
    <div class="flex flex-col text-center space-y-4 text-b2">
      <ExternalLink
        href="https://drive.google.com/file/d/1OoUqd-fPzgb_YLbBOvQRhjKIAWQ2S8U5/view?usp=sharing"
      >
        <Button
          class="bg-green-3 text-white border-green-3 hover:(bg-black text-white border-black)"
          >ดาวน์โหลดแบบฟอร์ม</Button
        ></ExternalLink
      >
      <ExternalLink
        href="https://drive.google.com/file/d/1dUTF1-agyw0sWXbYY-buPkGfpj_Au6Xb/view?usp=sharing"
      >
        <Button class="text-green-2 border border-green-2 hover:bg-white"
          >ดูตัวอย่างและวิธีการกรอกแบบฟอร์ม
        </Button></ExternalLink
      >
      <ExternalLink
        href="https://drive.google.com/file/d/1WHyz8F4BcJjOLEuPESrkGE9wTZM-BA8l/view?usp=sharing"
        class="text-b3 text-green-2 hover:underline"
        >ดูร่างรัฐธรรมนูญแก้ไขเพิ่มเติม ฉบับเต็ม
      </ExternalLink>
      <ExternalLink
        href="https://drive.google.com/file/d/1KXOO9W8Qqs6So9zticwDQgu3kSg7fYVn/view?usp=sharing"
        class="text-b3 text-green-2 hover:underline"
        >แผ่นพับ ทำไมต้องรื้อระบอบประยุทธ์?
      </ExternalLink>
    </div>
  </TabBody>
</div>
