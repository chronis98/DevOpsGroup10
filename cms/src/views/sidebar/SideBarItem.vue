<template>
  <div class="sidebar-item-container">
    <slot></slot>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "SideBarItem",
  components: {FontAwesomeIcon}
}
</script>

<style scoped lang="scss">
.sidebar-item-container {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
}

.sidebar-item-container:hover {
  background-color: darkgray;
  transition: .4s;
}

</style>
