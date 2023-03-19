<template>
  <div class="user-list-container">
    <div class="button-group">
      <button class="button button-primary">
        <font-awesome-icon icon="fa-solid fa-plus"/>
        Add
      </button>

      <button class="button button-secondary" :disabled="!rowIsSelected">
        <font-awesome-icon icon="fa-solid fa-pen"/>
        Edit
      </button>

      <button class="button button-danger" :disabled="!rowIsSelected">
        <font-awesome-icon icon="fa-solid fa-trash"/>
        Delete
      </button>
    </div>

    <AgGridVue
        style="height: 100%; width: 100%"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="users"
        :pagination="true"
        :rowSelection="'single'"
        :paginationPageSize="10"
        @cell-clicked="onCellClicked">
    </AgGridVue>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {AgGridVue} from "ag-grid-vue3";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import type {User} from "@/entities/user";
import type {CellClickedEvent} from "ag-grid-community";

export default defineComponent({
  name: "UserOverview",
  components: {
    AgGridVue
  },
  setup() {
    const usersRef = ref<User[] | null>(null);
    const rowIsSelected = ref<boolean>(false);

    getUsers().then(users => usersRef.value = users);

    async function getUsers(): Promise<User[]> {
      // TODO:: API call to real back-end
      return [
        {id: 1, email: "abdul@zor.nl", type: "type1"},
        {id: 2, email: "vahip@zor.nl", type: "type1"},
        {id: 3, email: "uva@zor.nl", type: "type2"}
      ];
    }

    function onCellClicked(event: CellClickedEvent) {
      rowIsSelected.value = true;
    }

    const columnDefs = [
      {headerName: "Id", field: "id"},
      {headerName: "Email", field: "email"},
      {headerName: "Type", field: "type"},
    ]

    return {
      users: usersRef,
      columnDefs,
      rowIsSelected,
      onCellClicked
    }
  }
});
</script>

<style scoped lang="scss">
.user-list-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.button-group {
  display: flex;
  justify-content: end;
  gap: 5px;
}


.button {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  transition-duration: 0.4s;
  cursor: pointer;
  color: white;
}

.button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}

.button-primary {
  background-color: var(--color-button-primary);
}

.button-primary:hover:not([disabled]) {
  background-color: var(--color-button-primary-light);
}

.button-secondary {
  background-color: var(--color-button-secondary);
}

.button-secondary:hover:not([disabled]) {
  background-color: var(--color-button-secondary-light);
}

.button-danger {
  background-color: var(--color-button-danger);
}

.button-danger:hover:not([disabled]) {
  background-color: var(--color-button-danger-light);
}

</style>
