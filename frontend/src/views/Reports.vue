<template>
  <div class="title">Reports</div>
  <div class="container">
    <div class="flex-topwards">
      <img class="image" :src="equipmentImage" :alt="equipment.name">
      <div class="details_title">{{ equipment.name }}</div>
    </div>
    <div class="card_container">
      <div v-for="report in  equipment.reports">
        <Card>
          <div class="gym_title">{{ report.comment }}</div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import router, { RouteName } from "@/router";
import Card from '@/views/Card.vue';
import type DetailEquipment from "./models/EquipmentResponse";

export default defineComponent({
  name: "Reports",
  components: { Card },
  setup() {
    const route = useRoute();
    const reports = ["test", "awful", "should be careful with that ding ding", "asdad", "asdads", "more", "more", "more"];
    const equipmentRef = ref<DetailEquipment | null>(null);
    const equipmentId = route.params.equipmentId;
    const gymId = route.params.gymId;
    fetchEquipment().then(equipment => equipmentRef.value = equipment);

    function fetchEquipment(): Promise<DetailEquipment> {
      return fetch(`http://localhost:8000/api/gym/${gymId}/equipment/${equipmentId}`)
        .then(res => res.json() as Promise<DetailEquipment>);
    }
    const equipmentImage = "https://www.bestusedgymequipment.com/wp-content/uploads/2018/04/olympic-flat-bench-300x300.jpg";
    return {
      equipment: equipmentRef,
      reports,
      equipmentImage,
    }
  }
});
</script>

<style scoped lang="scss">
.container {
  background-color: var(--vt-c-grey-soft);
  padding: 20px 10px 0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 100%;
  width: 100%;
}

.details_title {
  font-size: 20.56px;
  color: #FDFDFD;
  margin: 10px 10px 20px 10px;
}

.gym_title {
  margin: auto;

}

.title {
  font-style: 'large';
  font-size: 36.56px;
  color: #FDFDFD;
  padding: 10px;
}

.card_container {
  background-color: var(--vt-c-grey-soft);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
}

.image {
  max-height: 20vh;
  margin: 0 0 20px 0;
  border-radius: 8px;
  width: 150px;
}

.flex-topwards {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
