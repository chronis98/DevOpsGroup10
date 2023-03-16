<template>
  <div class="center">
    <div class="container" v-if="equipment">
      <img class="image" :src="equipment.imgPath" :alt="equipment.name">

      <div class="details-container">
        <label>Name: </label> <input :value="equipment.name" disabled>
        <span>First Added: </span> <span>{{ equipment.firstAdded.toLocaleString() }}</span>
        <span>Reports: </span> <span>{{ equipment.reports }}</span>
        <span>Confirmed: </span> <span>{{ equipment.confirmed.toLocaleString() }}</span>
      </div>

      <div class="button-container">
        <button>Stars</button>
        <button>Add Report</button>
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
  filters: {
    formattedDate(date: Date) {
      const options: Intl.DateTimeFormatOptions = {

        // day: "numeric",
        // month: "numeric",
        // year: "numeric"
      }
      return date.toDateString();
      // return new Intl.DateTimeFormat('default', options).format(date);
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
  border: red solid 1px;
}

.container {
  background-color: var(--vt-c-grey-soft);
  box-shadow: 4px 11px 15px 3px rgba(0, 0, 0, 0.25);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.details-container {
  display: grid;
  grid-templte-column: 25% 75%;
}

.button-container {

}

.image {
  max-width: 20vw;
  max-height: 20vh;
}

</style>
