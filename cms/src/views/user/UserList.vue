<template>
  <div>
    <UserCard v-for="i in 10"/>
  </div>
</template>

<script>
import UserCard from "@/views/user/UserCard.vue";

export default {
  name: "UserList",
  components: {UserCard}
}
</script>

<style scoped>

</style>
