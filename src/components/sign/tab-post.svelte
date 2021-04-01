<script>
  import Button from '../button.svelte'
  import PostStep from './post-step.svelte'
  import TabBody from './tab-body.svelte'
</script>

<div class="bg-blue-3 py-2 rounded-b-md ">
  <TabBody class="divide-blue-2 divide-y max-w-screen-md">
    <PostStep number="1">
      <p>
        ดาวน์โหลด <span class="font-bold">แบบฟอร์ม</span> ... สำหรับการเข้าชื่อเสนอกฎหมาย
        และพิมพ์ลงกระดาษ A4
      </p>
    </PostStep>
    <PostStep number="2">
      <p>
        กรอกข้อมูลใน <span class="font-bold">แบบฟอร์ม</span> ให้ครบถ้วน
      </p>
    </PostStep>
    <PostStep number="3">
      <p>
        <span class="font-bold">แนบสำเนาบัตรประจำตัวประชาชน</span>
        สำเนาบัตรประจำตัวประชาชนที่หมดอายุ หรือ สำเนาบัตรหรือหลักฐานอื่นใดของทางราชการที่มีรูปถ่ายสามารถแสดงตนได้
        พร้อมเซ็นสำเนาให้ถูกต้อง และขีดคร่อมว่า
        <span class="font-bold">“ใช้เพื่อเสนอร่างแก้ไขรัฐธรรมนูญเท่านั้น”</span>
      </p>
      <img
        src="images/post-example.png"
        alt="ตัวอย่าง"
        class="w-full max-w-sm mx-auto"
      />
    </PostStep>
    <PostStep number="4">
      <p>
        <span class="font-bold">ตรวจสอบลายเซ็นต์</span>
        ลงชื่อบน "..." และ "สำเนาบัตรประชาชน" ให้เหมือนกัน
      </p>
    </PostStep>
    <PostStep number="5">
      <p>ส่งเอกสารทั้งหมดมายัง</p>
      <p class="font-bold">“(ที่อยู่ - รอคอนเฟิร์ม)”</p>
      <ul class="list-disc">
        <li>สามารถส่งเอกสารของหลายคนมาในซองเดียวกันก็ได้</li>
        <li>สามารถส่งแบบธรรมดา ไม่จำเป็นต้องแบบด่วนพิเศษ</li>
      </ul>
    </PostStep>
    <div class="flex flex-col text-center space-y-2">
      <Button class="bg-green-3 text-white">ดาวน์โหลดแบบฟอร์ม</Button>
      <a href="/#" class="text-b2 py-2">ดูตัวอย่างการกรอกแบบฟอร์ม</a>
      <Button class="text-green-2 border border-green-2"
        >ดูร่างแก้ไขรัฐธรรมนูญฉบับเต็ม</Button
      >
      <Button class="text-green-2 border border-green-2"
        >ดูคำอธิบายร่างแก้ไขรัฐธรรมนูญรายมาตรา</Button
      >
    </div>
  </TabBody>
</div>
