<template>
  <div class="sidebar-container">
    <div class="logo">LOGO</div>

    <SideBarItem @click="routeToUsersOverview">
      <font-awesome-icon icon="fa-solid fa-users"/>
      <a>Users</a>
    </SideBarItem>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SideBarItem from "@/views/sidebar/SideBarItem.vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "SideBar",
  components: {SideBarItem},
  setup() {
    const router = useRouter();

    function routeToUsersOverview() {
      router.push({path: '/users'});
    }

    return {
      routeToUsersOverview
    }
  }
});
</script>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  background-color: grey;
}

.logo {
  // TODO:: Set boundaries for logo image for small and big screen
  margin-bottom: 40px;
}

@media only screen and (min-width: 640px) {
  .sidebar-container {
    height: 100vh;
    padding: 20px;
  }
}
</style>
