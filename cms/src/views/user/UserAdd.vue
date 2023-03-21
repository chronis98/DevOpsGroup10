<template>
  <div class="title">
    <span class="button" @click="goBack"><font-awesome-icon icon="fa-solid fa-chevron-left"/></span>
    <h2>Add User</h2>
  </div>

  <div class="container">
    <div class="fields-group">
      <label>Name: </label>
      <input v-model="user.username" type="text"/>

      <label>Email: </label>
      <input v-model="user.email" type="email"/>

      <label>Password: </label>
      <input v-model="user.password" type="password"/>
    </div>

    <div class="button-group">
      <button class="button button-danger" type="button" @click="goBack">
        <font-awesome-icon icon="fa-solid fa-xmark"/>
        Cancel
      </button>

      <button class="button button-primary" type="button" @click="saveUser">
        <font-awesome-icon icon="fa-solid fa-floppy-disk"/>
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";
import type {User} from "@/entities/User";

type FormUser = {
  username: string,
  email: string,
  password: string
};

export default defineComponent({
  name: "UserAdd",
  setup() {
    const router = useRouter();
    const userRef = ref<FormUser>({
      username: '',
      email: '',
      password: ''
    });

    function goBack() {
      router.back();
    }

    function saveUser(): Promise<User> {
      const {username, email, password} = userRef.value;
      return fetch('http://localhost:8000/api/user', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json() as Promise<User>);
    }

    return {
      user: userRef,
      goBack,
      saveUser
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
