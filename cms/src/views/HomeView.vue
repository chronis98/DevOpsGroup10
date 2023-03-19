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
.home-view-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.home-view-container > div {
  padding: 20px;
}

@media only screen and (min-width: 640px) {
  .home-view-container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr;
  }

  .home-view-container > div {
    padding: 25px;
  }
}

</style>
