<template>
  <div class="container">
    <h1>Users</h1>

    <div class="button-group">
      <button class="button button-primary" @click="routeToUserAdd">
        <font-awesome-icon icon="fa-solid fa-plus"/>
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

    <DeleteModal v-if="showModal" @close-modal="showModal = false" @delete="closeModalAndDelete"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {AgGridVue} from "ag-grid-vue3";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import type {CellClickedEvent, ColDef} from "ag-grid-community";
import type {User} from "@/entities/User";
import {useRoute, useRouter} from "vue-router";
import DeleteModal from "@/components/modals/DeleteModal.vue";

export default defineComponent({
  name: "UserOverview",
  components: {
    DeleteModal,
    AgGridVue
  },
  emits: ['close-modal'],
  setup(props, {emit}) {
    const router = useRouter();
    const route = useRoute();
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

    getUsers().then(users => users.map(user => {
      user.createdAt = new Date(user.createdAt).toLocaleString();
      usersRef.value = users
    }));

    async function getUsers(): Promise<User[]> {
      return fetch(`${process.env.API_HOST}/api/user`)
          .then(res => res.json() as Promise<User[]>);
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

    async function closeModalAndDelete() {
      await fetch(`${process.env.API_HOST}/api/user/${selectedUser.value!.id}`, {
        method: 'DELETE'
      }).then(res => res.json() as Promise<User>);
      showModal.value = false;
    }

    return {
      users: usersRef,
      selectedUser,
      columnDefs,
      rowIsSelected,
      showModal,
      onCellClicked,
      routeToUserEdit,
      routeToUserAdd,
      closeModalAndDelete
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
