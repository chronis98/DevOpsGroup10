<template>
  <div class="container">
    <div class="title">Add report</div>
    <div class="flex-topwards">
      <img class="image" :src="equipmentImage" :alt="equipmentName">
      {{ equipmentName }}
    </div>

    <div class="details">Select status: {{ selected }}</div>
    <select v-model="selected" class="select">
      <option disabled value="">None</option>
      <option>Working</option>
      <option>Defect</option>
    </select>
    <div class="details">Add comment: {{ selected }}</div>
    <input class='input' v-model="comment" placeholder="Place your comment here!" />
    <div>
      <button class="button">Submit report</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import router, { RouteName } from "@/router";
import Card from '@/views/Card.vue';


export default defineComponent({
  name: "AddReport",
  props: {
  },
  components: { Card },
  setup(props) {
    const route = useRoute();
    const reports = route.params.reportList as string[];
    const equipmentName = route.params.name as string;
    const equipmentImage = route.params.imgPath as string;
    console.log(reports);
    return {
      comment: '',
      selected: '',
      reports,
      equipmentName,
      equipmentImage
    }
  }
});
</script>

<style scoped lang="scss">
.title {
  font-size: 28.56px;
  color: #FDFDFD;
  margin: 5px;
  padding: 0px 0px 25px 0px;
}

.details {
  font-size: 18.56px;
  color: #FDFDFD;
  margin: 10px 10px 10px 5px;
}
.button{
  display: block;
  float: right;
  background-color: #0375F7;
  border: none;
  color: white;
  padding: 15px 15px 15px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 35px 0px 10px 10px;
  border-radius: 10px;
}
.button:hover{
  color: rgb(0, 0, 0);
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.input{
  background-color: #242A34;
  padding: 10px;
  border-radius: 8.2719px;
  color : #FDFDFD;
}
.placeholder{
  color:white;
}
.container {
  background-color: var(--vt-c-grey-soft);
  padding: 20px 20px 0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: inherit;
  justify-content: flex-start;
  height: 100%;
}

.select {
  display: flex;
  align-items: center;
  border-radius: 8.2719px;
  background-color: #242A34;
  color: #FFFFFF;
  padding: 10px;
  border: none;
  box-shadow: 1px 1px 0px 0px #17191e;
  transition: 0.2s;
  outline: none;
}

.flex-topwards {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 20px 0px;
}

.image {
  max-height: 20vh;
  margin: 0 0 20px 0;
  border-radius: 8px;
  width: 150px;
}

.select:hover {
  box-shadow: 0px 10px 16px 0 rgba(0, 0, 0, 0.901);
  cursor: pointer;
  border-radius: 20.2719px;
}
</style>
