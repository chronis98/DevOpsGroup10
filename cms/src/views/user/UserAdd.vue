<template>
  <div class="title">
    <span class="button" @click="goBack"><font-awesome-icon icon="fa-solid fa-chevron-left"/></span>
    <h2>Add User</h2>
  </div>

  <div class="container">
    <div class="fields-group">
      <!--      <label>ID: </label>-->
      <!--      <span>{{ user.id }}</span>-->

      <label>Name: </label>
      <input :value="user.username" type="text"/>

      <label>Email: </label>
      <input :value="user.email" type="email"/>

      <label>Created At: </label>
      <input type="date"/>
    </div>

    <div class="button-group">
      <button class="button button-danger" type="button" @click="goBack">
        <font-awesome-icon icon="fa-solid fa-trash"/>
        Cancel
      </button>

      <button class="button button-primary" type="button">
        <font-awesome-icon icon="fa-solid fa-floppy-disk"/>
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

type User = {
  username: string,
  email: string,
  createdAt: Date
}

export default defineComponent({
  name: "UserAdd",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const userRef = ref<User>({} as User);

    function goBack() {
      router.back();
    }

    function saveUser() {
      // TODO:: API call to real back-end
    }

    return {
      user: userRef,
      goBack
    }
  }
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  display: flex;
  align-items: center;
  gap: 20px;
}

.fields-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 20px;
}

.button-group {
  align-self: end;
  display: flex;
  gap: 10px;
}

@media only screen and (min-width: 640px) {
  .container {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
