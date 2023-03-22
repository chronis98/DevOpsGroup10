<template>
  <div class="title">Reports</div>
  <div class="container">
    <div class="flex-topwards">
      <img class="image" :src="equipmentReports.imagePath" :alt="equipmentReports.name">
      <div class="details_title">{{ equipmentReports.name }}</div>
    </div>
    <div class="card_container">
      <div v-for="report in equipmentReports.reports">
        <Card>
          <div class="gym_title">{{ report.comment }}</div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
	import {defineComponent, ref} from "vue";
	import {useRoute} from "vue-router";
	import Card from '@/views/Card.vue';
	import type EquipmentReports from "@/models/EquipmentReports";

	function fetchEquipmentReports(gymId: number, equipmentId: number): Promise<EquipmentReports> {
	return fetch(`${window.location.origin.substring(0, window.location.origin.lastIndexOf(":"))}:8000/api/gym/${gymId}/equipment/${equipmentId}/reports`)
			.then(res => res.json() as Promise<EquipmentReports>);
}

export default defineComponent({
  name: "Reports",
  components: { Card },
  setup() {
		const route = useRoute();
		const equipmentReportsRef = ref(null as unknown as EquipmentReports);
	  const gymId = parseInt(route.params.gymId as string);
	  const equipmentId = parseInt(route.params.equipmentId as string);
		fetchEquipmentReports(gymId, equipmentId)
				.then(equipmentReports => equipmentReportsRef.value = equipmentReports);

    return {
      equipmentReports: equipmentReportsRef
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
