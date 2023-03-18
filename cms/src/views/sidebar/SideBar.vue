<template>
  <div class="sidebar-container">
    <div class="logo">LOGO</div>

    <SideBarItem>
      <font-awesome-icon icon="fa-solid fa-users" />
      <a>Users</a>
    </SideBarItem>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SideBarItem from "@/views/sidebar/SideBarItem.vue";

export default defineComponent({
  name: "SideBar",
  components: {SideBarItem}
});
</script>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  background-color: grey;
}

.logo {
  margin-bottom: 40px;
}

@media only screen and (min-width: 640px) {
  .sidebar-container {
    height: 100vh;
    padding: 20px;
  }
}
</style>
