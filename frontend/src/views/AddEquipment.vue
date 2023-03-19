<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <div class="title">{{ gymName }}</div>
  <div class="details_title">Please select equipment</div>
  <div class="container">
  <div v-for="e in equipmentsRef ">
    <div class="reports_card">
    <Card
      source="https://static.vecteezy.com/system/resources/previews/015/845/432/original/gym-station-for-fitness-equipment-gym-station-icon-suitable-for-apps-website-developer-graphic-designer-needs-on-white-background-free-vector.jpg"
      name="" date="" @click="selectEquipment(e.id)"
      :class="{ 'selected-equipment': selectedEquipmentRef.includes(e.id) }" class="card">
      <div class="card_title">
        {{ e.name }} 
      </div>
    </Card>    
    </div>
  </div>    
  </div>

  <button class="button">Add</button>

  
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import router, { RouteName } from "@/router";
import Card from '../views/Card.vue';
import { remove } from "@vue/shared";

type Equipment = {
  id: number,
  category: Category,
  imagePath: string,
  name: string,
  description: string
}

type Category = {
  id: number,
  name: string
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default defineComponent({
  components: { Card },
  name: "AddEquipment",
  setup() {
    const route = useRoute();
    const gymName = route.params.name as string;
    const equipmentsRef = ref<Equipment[]>([]);
    async function fetchEquipment(): Promise<Equipment[]> {
      await delay(1000);
      return [{
        id: 1,
        category: { id: 5, name: "xronis" },
        name: "test",
        imagePath: "test",
        description: "Hello darkness my old friend"

      }, {
        id: 2,
        category: { id: 5, name: "xronis2" },
        name: "test2",
        imagePath: "test2",
        description: "Hello darkness my old friend2"

      }];
    }
    fetchEquipment().then(equipments => equipmentsRef.value = equipments);
    function viewDetails(name: string): void {
      router.push({ name: RouteName.EQUIPMENT_DETAILS, params: { name } });
    };
    async function submitEquipmentToApi(equipments: string[]): Promise<void> {
      return;
    }
    const selectedEquipmentRef = ref<number[]>([]);
    async function selectEquipment(equipmentId: number) {
      const index = selectedEquipmentRef.value.indexOf(equipmentId)
      if (index > -1) {
        selectedEquipmentRef.value.splice(index, 1);
      } else {
        selectedEquipmentRef.value.push(equipmentId);
      }
    }

    return {
      gymName,
      viewDetails,
      Card,
      equipmentsRef,
      selectedEquipmentRef,
      selectEquipment
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

$cardBorderWidth: 3px;

.card.selected-equipment {
  border: $cardBorderWidth solid rgb(255, 255, 255);
}

.title {
    font-size: 36.56px;
    color: #FDFDFD;
    margin: 10px 10px 40px 10px;
}
.details_title {
    font-size: 20.56px;
    color: #FDFDFD;
    margin: 10px 10px 20px 10px;
}

img {
  width: 50px;
  height: 50px;
  display: absolute;
  border-radius: 10%;
}

.card:hover,
.card {
  border: $cardBorderWidth solid transparent;
  display: flex;
}
.button{
  display: block;
  float: right;
  background-color: #0375F7;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin:10px;
  border-radius: 20%;
}
.button:hover{
  color: rgb(0, 0, 0);
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
.card_title {
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
  // height: 100%;
}
</style>
