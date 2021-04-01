<script>
  import TabBody from './tab-body.svelte'
  import location from '../../assets/data/location.json'
  import { formatThaiDate } from '../../utils/date'
  import PointLabel from './point-label.svelte'
  import LocationAccordion from './location-accordion.svelte'
</script>

<div class="bg-white py-2 rounded-b-md ">
  <TabBody class="divide-black divide-y-2">
    <div class="text-center p-6 space-y-2">
      <h6 class="text-h5 font-bold">
        มีจุดตั้งโต๊ะทั้งหมด {location.pointCount} จุด ใน {location.provinceCount}
        จังหวัด
      </h6>
      <p class="text-b4">
        อัปเดทข้อมูลล่าสุด {formatThaiDate(location.lastUpdated)}
      </p>
      <div class="flex flex-row space-x-4 justify-center pt-4">
        <PointLabel color="bg-blue-1">จุดตั้งโต๊ะประจำ</PointLabel>
        <PointLabel color="bg-orange">จุดตั้งโต๊ะประจำ</PointLabel>
      </div>
    </div>

    {#each location.locations as { province, points }}
      <LocationAccordion {province} {points} />
    {/each}
  </TabBody>
</div>
