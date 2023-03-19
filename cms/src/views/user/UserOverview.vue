<template>
  <div class="user-list-container">
    <h1>Users</h1>

    <div class="button-group">
      <button class="button button-primary">
        <font-awesome-icon icon="fa-solid fa-plus"/>
        Add
      </button>

      <button class="button button-secondary" :disabled="!selectedUser" @click="routeToUserEdit">
        <font-awesome-icon icon="fa-solid fa-pen"/>
        Edit
      </button>

      <button class="button button-danger" :disabled="!selectedUser">
        <font-awesome-icon icon="fa-solid fa-trash"/>
        Delete
      </button>
    </div>

    <AgGridVue
        class="ag-theme-alpine grid"
        :columnDefs="columnDefs"
        :rowData="users"
        :pagination="true"
        :rowSelection="'single'"
        :paginationPageSize="10"
        @cell-clicked="onCellClicked">
    </AgGridVue>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {AgGridVue} from "ag-grid-vue3";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import type {CellClickedEvent, ColDef} from "ag-grid-community";
import type {User} from "@/entities/User";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "UserOverview",
  components: {
    AgGridVue
  },
  setup() {
    const router = useRouter();
    const usersRef = ref<User[]>([]);
    const rowIsSelected = ref<boolean>(false);
    const selectedUser = ref<User | null>(null);

    const columnDefs: ColDef[] = [
      {headerName: "Id", field: "id"},
      {headerName: "Email", field: "email"},
      {headerName: "Type", field: "type"}
    ]

    getUsers().then(users => usersRef.value = users);

    async function getUsers(): Promise<User[]> {
      // TODO:: API call to real back-end
      return [
        {id: 1, email: "abdul@zor.nl", username: "abdul", created_at: new Date()},
        {id: 2, email: "vahip@zor.nl", username: "vahip", created_at: new Date()},
        {id: 3, email: "uva@zor.nl", username: "uva", created_at: new Date()}
      ];
    }

    function onCellClicked(event: CellClickedEvent) {
      rowIsSelected.value = true;
      selectedUser.value = event.data;
    }

    function routeToUserEdit() {
      router.push({name: 'userEdit', params: {'id': selectedUser.value!.id}});
    }

    return {
      users: usersRef,
      selectedUser,
      columnDefs,
      rowIsSelected,
      onCellClicked,
      routeToUserEdit
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

.grid {
  height: 100%;
  width: 100%;
}

</style>
