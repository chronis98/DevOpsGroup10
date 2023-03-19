<template>

</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import type {User} from "@/entities/User";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "UserEdit",
  setup() {
    const route = useRoute()

    const userRef = ref<User | null>(null);

    watch(() => route.params.id,
        newId => {
          return getUser(Number(newId)).then(user => userRef.value = user);
        }
    );

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
