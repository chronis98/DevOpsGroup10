<template>
<!--  <div class="main-overview-container">-->
<!--    <UserOverview/>-->
<!--  </div>-->
</template>

<script lang="ts">
import UserOverview from "@/views/user/UserOverview.vue";
import UserEdit from "@/views/user/UserEdit.vue";

export default {
  name: "MainOverview",
  components: {UserEdit, UserOverview}
}
</script>

<style scoped lang="scss">
.main-overview-container {
  height: 80%;
}

</style>
