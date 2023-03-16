<template>
  <div class="center">
    <div class="container">
      <h2>Greeting from Abdul to Chronis!</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AddEquipment",
  setup() {

    return {}
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

</style>
