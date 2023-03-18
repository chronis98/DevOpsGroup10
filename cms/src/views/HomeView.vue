<template>
  <div class="home-view-container">
    <SideBar/>
    <MainOverview/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import SideBar from "@/views/SideBar.vue";
import MainOverview from "@/views/MainOverview.vue";

type User = {
  id: number,
  email: string,
  type: string // TODO:: chose string because ERD has VARCHAR. Check if this has to be an enum
}

export default defineComponent({
  name: "HomeView",
  components: {
    MainOverview,
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
.home-view-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.home-view-container > div {
  padding: 20px;
}

@media only screen and (min-width: 640px) {
  .home-view-container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr;
  }

  .home-view-container > div {
    padding: 25px;
  }
}

</style>
