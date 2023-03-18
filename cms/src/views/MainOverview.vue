<template>
  <div>
    <span>HOOI</span>

    <UserList/>
  </div>
</template>

<script>
import UserList from "@/views/user/UserList.vue";

export default {
  name: "MainOverview",
  components: {UserList}
}
</script>

<style scoped>

</style>
