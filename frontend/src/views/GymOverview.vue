<template>
  <div class="title">Gym Overview</div>
  <br><br>
  <div class="container">
  <div v-for="l in locations">
    <Card name='' :date="l.date" v-on:click.native="handleClick(l.name)">
      <div>
        <img
          src="https://img.freepik.com/premium-vector/barbell-dumbbell-gym-icon-logo-template-gym-badge-fitness-logo-design_757387-345.jpg?w=2000" />
      </div>
      <div class="gym_title"> {{ l.name }} </div>
    </Card>
  </div>    
  </div>
 
</template>

<script lang="ts">

import GymDetails from '../views/GymDetails.vue';
import { defineComponent } from "vue";
import type { Location } from "@/views/GymDetails.vue";
import { useRouter } from "vue-router";
import { RouteName } from "@/router";
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
    const locations: Location[] = [
      {
        name: "Basic-Fit Amsterdam", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press",
          "Incline bench press",
          "Decline bench press",
          "Adjustable bench",
          "Olympic Weight Bench"
        ], date: "11/02/2022", numberOfPeople: 4, complete: true
      },
      {
        name: "Basic-Fit Amsterdam West", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press",
          "Incline bench press",
          "Decline bench press",
          "Adjustable bench",
          "Olympic Weight Bench",
          "Tricep Extension Machine",
          "Shoulder Press Machine",
          "Front Pull Down Machine"
        ], date: "12/01/2022", numberOfPeople: 2, complete: true
      },
      {
        name: "Basic-Fit Leiden", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press"
        ], date: "04/06/2021", numberOfPeople: 6, complete: true
      },
      {
        name: "Power-Fit Diemen", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press",
          "Incline bench press",
          "Decline bench press",
          "Adjustable bench",
          "Olympic Weight Bench",
          "Tricep Extension Machine",
          "Shoulder Press Machine",
          "Front Pull Down Machine"
        ], date: "08/10/2021", numberOfPeople: 10, complete: true
      },
      {
        name: "Get-Fit Hilversum", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press",
          "Incline bench press",
          "Decline bench press",
          "Adjustable bench",
          "Olympic Weight Bench",
          "Tricep Extension Machine",
          "Shoulder Press Machine",
          "Front Pull Down Machine"
        ], date: "12/12/2022", numberOfPeople: 14, complete: true
      },
      {
        name: "Get-Fit Utrecht", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press",
          "Incline bench press",
          "Decline bench press",
          "Adjustable bench",
          "Olympic Weight Bench",
          "Tricep Extension Machine",
          "Shoulder Press Machine",
          "Front Pull Down Machine"
        ], date: "10/02/2023", numberOfPeople: 12, complete: false
      },
      {
        name: "Get-Fit Den Haag", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press",
          "Incline bench press"
        ], date: "04/02/2020", numberOfPeople: 2, complete: true
      }
    ];

    const router = useRouter();
    function handleClick(name: string): void {
      router.push({ name: RouteName.GYM_DETAILS, params: { name } });
    }

    return {
      locations,
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
