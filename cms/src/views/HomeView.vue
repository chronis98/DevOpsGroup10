<template>
  <div class="home-view-container">
    <SideBar/>
    <MainOverview/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import SideBar from "@/views/sidebar/SideBar.vue";
import MainOverview from "@/views/MainOverview.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainOverview,
    SideBar
  },
  setup() {
  }
});

</script>

<style scoped lang="scss">

</style>
