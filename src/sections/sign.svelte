<script lang="ts">
  import TabHead from '../components/sign/tab-head.svelte'
  import Layout from '../components/layout.svelte'
  import TabPost from '../components/sign/tab-post.svelte'
  import TabLocation from '../components/sign/tab-location.svelte'

  type Tab = 'post' | 'location'

  let activeTab: Tab = 'post'
</script>

<Layout class="bg-green-1">
  <h2 class="text-h3 text-white text-center">ร่วมลงชื่อ</h2>
  <div class="flex flex-col -md:-mx-3">
    <div class="flex flex-row space-x-1">
      <TabHead class="bg-blue-3" on:click={() => (activeTab = 'post')}
        >ส่งไปรษณีย์ด้วยตนเอง</TabHead
      >
      <TabHead class="bg-white" on:click={() => (activeTab = 'location')}
        >ลงชื่อที่จุดตั้งโต๊ะ</TabHead
      >
    </div>
    {#if activeTab === 'post'}
      <TabPost />
    {:else}
      <TabLocation />
    {/if}
  </div>
</Layout>
