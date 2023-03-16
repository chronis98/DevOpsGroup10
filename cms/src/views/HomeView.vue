<template>
  <div>
    <SideBar/>
    <main>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import SideBar from "@/views/SideBar.vue";

type User = {
  id: number,
  email: string,
  type: string // TODO:: chose string because ERD has VARCHAR. Check if this has to be an enum
}

export default defineComponent({
  name: "HomeView",
  components: {
    SideBar
  },
  setup() {
    const usersRef = ref<User[] | null>(null);
    getUsers().then(users => usersRef.value = users);

    async function getUsers(): Promise<User[]> {
      return [
        {id: 1, email: "abdul@zor.nl", type: "type1"},
        {id: 1, email: "vahip@zor.nl", type: "type1"},
        {id: 1, email: "abva@zor.nl", type: "type2"}
      ]
    }

    return {
      users: usersRef
    }
  }
});

</script>

<style scoped lang="scss">


</style>
