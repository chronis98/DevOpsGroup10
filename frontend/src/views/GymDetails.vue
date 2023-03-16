<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <div class="title">{{ gymName }}</div>
  <br><br>
  <div v-for=" e, index in gymEquipment">

    <Card
      source="https://static.vecteezy.com/system/resources/previews/015/845/432/original/gym-station-for-fitness-equipment-gym-station-icon-suitable-for-apps-website-developer-graphic-designer-needs-on-white-background-free-vector.jpg"
      :name="e" date="">

      <div v-if="Math.random() > 0.5">
        <span class="checkmark">
          <div class="checkmark_circle"></div>
          <div class="checkmark_stem"></div>
          <div class="checkmark_kick"></div>
        </span>
      </div>
      <div v-else>
        <span class="crosssign">
          <div class="crosssign_circle"></div>
          <div class="crosssign_stem"></div>
          <div class="crosssign_stem2"></div>
        </span>
      </div>
    </Card>

  </div>
  <div @click="addEquipment(gymName)" class="plus radious">
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import router, { RouteName } from "@/router";
import Card from '../views/Card.vue';

export type Location = {
  name: string;
  equipment: string[];
  date: string;
  numberOfPeople: number;
  complete: boolean;
};

export default defineComponent({
  components: { Card },
  name: "GymDetails",
  setup() {
    const route = useRoute();
    const locations: Location[] = [
      { name: "Basic-Fit Amsterdam", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press",
          "Incline bench press",
          "Decline bench press",
          "Adjustable bench",
          "Olympic Weight Bench"
        ], date: "11/02/2022", numberOfPeople: 4, complete: true },
      { name: "Basic-Fit Amsterdam West", equipment: [
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
        ], date: "12/01/2022", numberOfPeople: 2, complete: true },
      { name: "Basic-Fit Leiden", equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press"
        ], date: "04/06/2021", numberOfPeople: 6, complete: true },
      { name: "Power-Fit Diemen", equipment: [
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
        ], date: "08/10/2021", numberOfPeople: 10, complete: true },
      { name: "Get-Fit Hilversum", equipment: [
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
        ], date: "12/12/2022", numberOfPeople: 14, complete: true },
      { name: "Get-Fit Utrecht", equipment: [
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
        ], date: "10/02/2023", numberOfPeople: 12, complete: false },
      { name: "Get-Fit Den Haag",equipment: [
          "Power rack",
          "Chest fly machine",
          "Bench Press",
          "Incline bench press"
        ], date: "04/02/2020", numberOfPeople: 2, complete: true }
    ];
    
    const gymName = route.params.name as string;
    const gym = locations.find(location => location.name === gymName);

    if (!gym ) {
      const router = useRouter(); 
      router.push({ name: RouteName.GYM_OVERVIEW }); 
    }
    
    const card = document.getElementById("test");
    console.log(card);
    function addEquipment(name: string): void {
    };

    return {
      gymName,
      locations,
      gymEquipment: gym!.equipment,
      addEquipment,
      Card
    };
  },
})

</script>
<style scoped lang = "scss">
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

.title {
  font-style: 'large';
  font-size: 36.56px;
  color: #FDFDFD;
  margin: 5px;
}

img {
  width: 50px;
  height: 50px;
  display: absolute;
  border-radius: 10%;
}

.card:hover, .plus:hover {
  box-shadow: 0px 10px 16px 0 rgba(0, 0, 0, 0.901);
  cursor: pointer;
  border-radius: 20.2719px;
}

.plus {
  display: relative;
  float: right;
  margin: 0 25px 0 0;
  right: -8px;
  --b: 4px;
  width: 38px;
  aspect-ratio: 1;
  border: 10px solid #0375F7;
  border-radius: 50%;
  background:
    conic-gradient(from 90deg at var(--b) var(--b), #0375F7 90deg, #fff 0) calc(100% + var(--b)/2) calc(100% + var(--b)/2)/ calc(50% + var(--b)) calc(50% + var(--b));
}

.plus:hover {
  background:
    conic-gradient(from 90deg at var(--b) var(--b), #0375F7 90deg, rgb(0, 0, 0) 0) calc(100% + var(--b)/2) calc(100% + var(--b)/2)/ calc(50% + var(--b)) calc(50% + var(--b));
}

.reports {
  color: #535965;
}

.crosssign {
  display: block;
  float: left;
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
}

.crosssign_circle {
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: red;
  border-radius: 11px;
  left: 0;
  top: 0;
}

.crosssign_stem, .crosssign_stem2 {
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.crosssign_stem {
  width: 3px;
  height: 9px;
}

.crosssign_stem2 {
  width: 9px;
  height: 3px;
}

.checkmark {
  display: absolute;
  float: left;
  width: 22px;
  height: 22px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkmark_circle {
  position: block;
  width: 22px;
  height: 22px;
  background-color: green;
  border-radius: 11px;
  left: 0;
  top: 0;
}

.checkmark_circle {
  position: block;
  width: 22px;
  height: 22px;
  background-color: green;
  border-radius: 11px;
  left: 0;
  top: 0;
}

.checkmark_stem {
  position: absolute;
  width: 3px;
  height: 9px;
  background-color: #fff;
  left: 11px;
  top: 6px;
}

.checkmark_kick {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: #fff;
  left: 8px;
  top: 12px;
}
</style>
