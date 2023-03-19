<template>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import type {User} from "@/entities/user";

export default defineComponent({
  name: "UserEdit",
  props: {
    id: {type: Number, required: true}
  },
  setup(props) {
    const userRef = ref<User | null>(null);
    getUser(props.id).then(user => userRef.value = user);

    async function getUser(id: number): Promise<User> {
      // TODO:: API call to real back-end

      return {id, email: "abdul@zor.nl", type: "type1"};
    }

    return {
      user: userRef
    }
  }
});
</script>

<style scoped lang="scss">

</style>
