<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import SideBar from "@/views/sidebar/SideBar.vue";
</script>

<template>
  <div class="home-view-container">
    <SideBar/>

    <div class="main-overview-container">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
.home-view-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.home-view-container > div {
  padding: 20px;
}

.main-overview-container {
  height: 80%;
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
