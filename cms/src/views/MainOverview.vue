<template>
  <div class="main-overview-container">
    <span>HOOI</span>

    <UserList/>
<!--    <UserEdit/>-->
  </div>
</template>

<script>
import UserList from "@/views/user/UserList.vue";
import UserEdit from "@/views/user/UserEdit.vue";

export default {
  name: "MainOverview",
  components: {UserEdit, UserList}
}
</script>

<style scoped lang="scss">
.main-overview-container {
  height: 80%;
}

</style>
