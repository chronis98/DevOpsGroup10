<template>
  <div class="center">
    <div class="container" v-if="equipment">
      <img class="image" :src="equipment.imgPath" :alt="equipment.name">

      <div class="details-container">
        <label>Name: </label> <span>{{ equipment.name }}</span>
        <label>First Added: </label> <span>{{ equipment.firstAdded.toLocaleString() }}</span>
        <label>Reports: </label> <span>{{ equipment.reports }}</span>
        <label>Confirmed: </label> <span>{{ equipment.confirmed.toLocaleString() }}</span>
      </div>

      <div class="buttons-container">
        <button class="button" type="button">Stars</button>
        <button class="button button-primary" type="button">Add Report</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

type Equipment = {
  imgPath: string
  name: string,
  firstAdded: Date,
  reports: number,
  confirmed: Date
};

export default defineComponent({
  name: "EquipmentDetail",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const equipmentRef = ref<Equipment | null>(null);
    getEquipment(props.id).then(equipment => equipmentRef.value = equipment);

    async function getEquipment(id: Number = 0): Promise<Equipment> {
      return {
        imgPath: "https://www.bestusedgymequipment.com/wp-content/uploads/2018/04/olympic-flat-bench-300x300.jpg",
        name: "Bench Press",
        firstAdded: new Date(),
        reports: 10,
        confirmed: new Date()
      };
    }

    return {
      equipment: equipmentRef
    }
  }
});
</script>

<style scoped lang="scss">
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: var(--vt-c-grey-soft);
  box-shadow: 4px 11px 15px 3px rgba(0, 0, 0, 0.25);
  padding: 20px 30px;
  margin: 15px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.details-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.buttons-container {
  align-self: end;
  display: flex;
  gap: 10px;
}

.image {
  max-height: 20vh;
  margin: 0 0 20px 0;
  border-radius: 8px;
}

.button {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button-primary {
  background-color: black;
  color: white;
}

.button-primary:hover {
  background-color: var(--color-background);
  color: white;
}

</style>
