<template>
  <div class="title">
    <span class="button" @click="goBack"><font-awesome-icon icon="fa-solid fa-chevron-left"/></span>
    <h2>Edit User</h2>
  </div>

  <div class="container" v-if="user">
    <div class="fields-group">
      <label>ID: </label>
      <span>{{ user.id }}</span>

      <label>Name: </label>
      <input v-model="user.username" type="text"/>

      <label>Email: </label>
      <input v-model="user.email" type="email"/>

      <label>New Password: </label>
      <input v-model="user.password" type="password"/>

      <label>Created At: </label>
      <label>{{ user.createdAt.toLocaleString() }}</label>
    </div>

    <div class="button-group">
      <button class="button button-danger" type="button" @click="goBack">
        <font-awesome-icon icon="fa-solid fa-xmark"/>
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
import type {User} from "@/entities/User";

type EditUser = { password: string } & User;

export default defineComponent({
  name: "UserEdit",
  setup() {
    const route = useRoute();
    const router = useRouter();
    // const user: User = {} as User;
    const userRef = ref<EditUser | null>(null);

    getUser(Number(route.params.id)).then(user => {
      userRef.value = {...user, password: ""};
    });

    function goBack() {
      router.back();
    }

    async function getUser(id: number): Promise<User> {
      // TODO:: API call to real back-end

      return {id, email: "abdul@zor.nl", username: "Abdul", createdAt: new Date()};
    }

    async function saveUser() {
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
