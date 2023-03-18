<template>
  <div class="sidebar-container">
    <div class="logo">LOGO</div>
    <div>Users</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "SideBar"
});
</script>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  background-color: grey;
  border-radius: 20px;
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
