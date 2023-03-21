<template>
  <div class="modal-overlay">
    <div class="modal">
      <p>Are you sure that you want to delete?</p>

      <div class="button-group">
        <button class="button button-danger" @click="$emit('close-modal')">
          <font-awesome-icon icon="fa-solid fa-xmark"/>
          Cancel
        </button>
        <button class="button button-primary" @click="$emit('delete')">
          <font-awesome-icon icon="fa-solid fa-trash"/>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
// import {User} from "@/entities/User";
import {useRoute} from "vue-router";
import type {User} from "@/entities/User";

export default defineComponent({
  name: "DeleteModal",
});
</script>

<style scoped lang="scss">

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  color: #000000da;
}

.modal {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: fit-content;
  height: fit-content;
  margin-top: 10%;
  padding: 20px 20px;
  border-radius: 20px;
  background-color: white;
}

.button-group {
  display: flex;
  justify-content: end;
  gap: 10px;
}
</style>
