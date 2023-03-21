<template>
  <div class="title">Gym Overview</div>
  <br><br>
  <div class="container">
    <div v-for="gym in gyms">
      <Card @click="handleClick(gym.id)">
        <div>
          <img :src="gym.imagePath" />
        </div>
        <div class="gym_title"> {{ gym.name }} </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">

import GymDetails from '../views/GymDetails.vue';
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { RouteName } from "@/router";
import type Address from "@/models/Address";
import type OverviewGym from "@/models/Gym";
import HelloWorld from '../components/HelloWorld.vue'
import Card from '../views/Card.vue';

export default defineComponent({
  components: {
    GymDetails,
    HelloWorld,
    Card,
  },
  name: 'GymOverview',
  setup() {
    const url = `http://localhost:8000/api/gym`; // construct the URL with the value in the query string

    fetch(url)
    .then(response => response.json()) // assuming the response is JSON data
    .then(data => {
    console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
    const gymsRef = ref<OverviewGym[]>([]);
    const router = useRouter();
    fetchGyms().then(gyms => gymsRef.value = gyms);

    function fetchGyms(): Promise<OverviewGym[]> {
      return fetch(`${process.env.API_HOST}/api/gym`)
        .then(res => res.json() as Promise<OverviewGym[]>);
    }

    function handleClick(gymId: number): void {
      router.push({ name: RouteName.GYM_DETAILS, params: { gymId } });
    }

    return {
      gyms: gymsRef,
      handleClick
    };
  }
});

</script>

<style scoped lang="scss">
.title {
  font-style: 'large';
  font-size: 36.56px;
  color: #FDFDFD;
  padding: 10px;
}

img {
  width: 50px;
  height: 50px;
  display: absolute;
  border-radius: 10%;
}

.gym_title {
  margin: auto;

}

.container {
  background-color: var(--vt-c-grey-soft);
  padding: 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: flex-start;
  gap: 10px;
  height: 100%;
}
</style>
