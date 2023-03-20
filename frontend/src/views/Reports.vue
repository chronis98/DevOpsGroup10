<template>
    <div class="title">Reports</div>
    <div class="container">
      <div class="flex-topwards">
        <img class="image" :src="equipmentImage" :alt="equipmentName">
        {{ equipmentName }}
      </div>
      <div class="card_container">
        <div v-for="report in  reports">
          <Card>
            <div class="gym_title">{{report}}</div>
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

export default defineComponent({
  name: "Reports",
  components: {Card},
  setup() {
    const route = useRoute();
    const reports = ["test", "awful", "should be careful with that ding ding", "asdad", "asdads","more","more","more"];
    const equipmentName = route.params.equipmentName as string;
    const equipmentImage = "https://www.bestusedgymequipment.com/wp-content/uploads/2018/04/olympic-flat-bench-300x300.jpg";
    console.log(reports);
    return {
      reports,
      equipmentName,
      equipmentImage
    }
  }
});
</script>

<style scoped lang="scss">

.container {
  background-color: var(--vt-c-grey-soft);
  padding: 20px 30px 0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 100%;
}

.gym_title {
  margin: auto;

}
.title {
    font-size: 28.56px;
    color: #FDFDFD;
    margin: 5px;
}

.card_container {
  background-color: var(--vt-c-grey-soft);
  padding: 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
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
