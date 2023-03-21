<template>
  <div class="container">
    <h1>Users</h1>

    <div class="button-group">
      <button class="button button-primary" @click="routeToUserAdd">
        <font-awesome-icon icon="fa-solid fa-plus" />
        Add
      </button>

      <button class="button button-secondary" :disabled="!selectedUser" @click="routeToUserEdit">
        <font-awesome-icon icon="fa-solid fa-pen"/>
        Edit
      </button>

      <button class="button button-danger" :disabled="!selectedUser" @click="showModal = true">
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

    <DeleteModal v-show="showModal" @close-modal="showModal = false"/>
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
import DeleteModal from "@/components/modals/DeleteModal.vue";

export default defineComponent({
  name: "UserOverview",
  components: {
    DeleteModal,
    AgGridVue
  },
  setup() {
    const router = useRouter();
    const usersRef = ref<User[]>([]);
    const rowIsSelected = ref<boolean>(false);
    const selectedUser = ref<User | null>(null);
    const showModal = ref<boolean>(false);

    const columnDefs: ColDef[] = [
      {headerName: "Id", field: "id"},
      {headerName: "Email", field: "email"},
      {headerName: "Username", field: "username"},
      {headerName: "Created At", field: "createdAt"}
    ]

    getUsers().then(users => usersRef.value = users);

    async function getUsers(): Promise<User[]> {
      // TODO:: API call to real back-end
      return [
        {id: 1, email: "abdul@zor.nl", username: "abdul", createdAt: new Date()},
        {id: 2, email: "vahip@zor.nl", username: "vahip", createdAt: new Date()},
        {id: 3, email: "uva@zor.nl", username: "uva", createdAt: new Date()}
      ];
    }

    function onCellClicked(event: CellClickedEvent) {
      rowIsSelected.value = true;
      selectedUser.value = event.data;
    }

    function routeToUserEdit() {
      router.push({name: 'userEdit', params: {'id': selectedUser.value!.id}});
    }

    function routeToUserAdd() {
      router.push({name: 'userAdd'});
    }

    return {
      users: usersRef,
      selectedUser,
      columnDefs,
      rowIsSelected,
      showModal,
      onCellClicked,
      routeToUserEdit,
      routeToUserAdd
    }
  }
});
</script>

<style scoped lang="scss">
.container {
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

.grid {
  height: 100%;
  width: 100%;
}

</style>
