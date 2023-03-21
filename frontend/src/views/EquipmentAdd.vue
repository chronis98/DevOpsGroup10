<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- <div class="title">{{ gymName }}</div> -->
  <div class="details_title">Please select equipment</div>
  <div class="container">
    <div v-for="e in equipment ">
      <div class="reports_card">
        <Card @click="toggleEquipmentSelection(e.id)"
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

	import {defineComponent, ref} from "vue";
	import {useRoute} from "vue-router";
	import Card from '../views/Card.vue';
	import type Equipment from "@/models/Equipment";

	function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default defineComponent({
  components: { Card },
  name: "AddEquipment",
  setup() {
    const equipmentRef = ref<Equipment[]>([]);
    const router = useRoute();
    fetchEquipment().then(equipment => equipmentRef.value = equipment);

    function fetchEquipment(): Promise<Equipment[]> {
      return fetch('http://localhost:8000/api/gym/equipment')
        .then(res => res.json() as Promise<Equipment[]>);
    }

    async function submitEquipmentToApi(equipments: string[]): Promise<void> {
      return;
    }

    const selectedEquipmentRef = ref<number[]>([]);

    async function toggleEquipmentSelection(equipmentId: number): Promise<void> {
      const index = selectedEquipmentRef.value.indexOf(equipmentId)
      if (index > -1) {
        selectedEquipmentRef.value.splice(index, 1);
      } else {
        selectedEquipmentRef.value.push(equipmentId);
      }
    }

    return {
      Card,
      equipment: equipmentRef,
      selectedEquipmentRef,
      toggleEquipmentSelection
    };
  },
})

</script>
<style scoped lang="scss">
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

.button {
  display: block;
  float: right;
  background-color: #0375F7;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
  border-radius: 20%;
}

.button:hover {
  color: rgb(0, 0, 0);
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
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
