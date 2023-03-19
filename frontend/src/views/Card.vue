<script lang="ts">

import { defineComponent } from "vue";
export default defineComponent({
  name: "Card",
  props: {
    name: String
  }
});
</script>

<template>
  <div class="card">
    {{ name }}<br>
    <slot>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.card:hover,
a:hover,
.radius:hover {
  background-color: hsla(254, 100%, 37%, 0.2);
  color: rgb(16, 104, 142);
}

body {
  display: flex;
  place-items: center;
  background-color: #181a1f;
}

text #app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
}

img {
  width: 45px;
  height: 40px;
  display: absolute;
  border-radius: 10%;
}

.card {
  box-shadow: 1px 1px 0px 0px #17191e;
  transition: 0.2s;
  display: flex;
  flex-direction: center;
  gap: 20px;
  align-items: center;
  background-color: #242A34;
  border-radius: 8.2719px;
  text-align: center;
  padding: 10px;
}

.card:hover {
  box-shadow: 0px 10px 16px 0 rgba(0, 0, 0, 0.901);
  cursor: pointer;
  border-radius: 20.2719px;
}
</style>
