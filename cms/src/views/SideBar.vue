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
  //border-radius: 0 10px 10px 0;
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

//.sidenav a {
//  padding: 6px 8px 6px 16px;
//  text-decoration: none;
//  font-size: 25px;
//  color: #818181;
//  display: block;
//}
//
//.sidenav a:hover {
//  color: #f1f1f1;
//}
</style>
