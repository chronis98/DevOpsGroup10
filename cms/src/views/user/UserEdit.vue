<template>
  <div class="title">
    <span class="button" @click="goBack"><font-awesome-icon icon="fa-solid fa-chevron-left"/></span>
    <h2>Edit User</h2>
  </div>

  <div class="container" v-if="userLoaded">
    <div class="fields-group">
      <label>ID: </label>
      <span>{{ $route.params.id }}</span>

      <label>Name: </label>
      <input v-model="formUser.username" type="text"/>

      <label>Email: </label>
      <input v-model="formUser.email" type="email"/>
    </div>

    <div class="button-group">
      <button class="button button-danger" type="button" @click="goBack">
        <font-awesome-icon icon="fa-solid fa-xmark"/>
        Cancel
      </button>

      <button class="button button-primary" type="button" @click="saveUserAndReturn">
        <font-awesome-icon icon="fa-solid fa-floppy-disk"/>
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import type {User} from "@/entities/User";

type FormUser = {
  username: string,
  email: string
};

export default defineComponent({
  name: "UserEdit",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const userRef = ref<User | null>(null);
    const formUserRef = ref<FormUser>({
      username: '',
      email: ''
    });

    fetchUser(parseInt(route.params.id as string)).then(user => {
      userRef.value = user;
      formUserRef.value = {
        username: user.username,
        email: user.email
      };
    });

    async function saveUserAndReturn() {
      await saveUser();
      router.back();
    }

    function goBack() {
      router.back();
    }

    async function fetchUser(id: number): Promise<User> {
      return fetch(`${window.location.origin.substring(0, window.location.origin.lastIndexOf(":"))}:8000/api/user/${id}`)
          .then(res => res.json() as Promise<User>);
    }

    async function saveUser(): Promise<User> {
      const {username, email} = formUserRef.value;
      return fetch(`${window.location.origin.substring(0, window.location.origin.lastIndexOf(":"))}:8000/api/user/${route.params.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          username,
          email
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json() as Promise<User>);
    }

    return {
      userLoaded: computed(() => !!userRef.value),
      formUser: formUserRef,
      goBack,
      saveUserAndReturn
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
