<template>
  <div class="center">
    <div class="equipment-detail-container" v-if="equipment">
      <img :src="equipment.imgPath" :alt="equipment.name">

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
        name: "",
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

.equipment-detail-container {

}

</style>
