<template>
	<div class="title">Add report</div>
	<div class="container">
		<div class="flex-topwards">
			<img class="image" :src="equipment.imagePath" :alt="equipment.name">
			{{ equipment.name }}
		</div>

		<div class="details">Select status: {{ status }}</div>
		<select v-model="status" class="select">
			<option selected value="null">None</option>
			<option value="0">Working</option>
			<option value="1">Defect</option>
		</select>
		<div class="details">Add comment: {{ status }}</div>
		<input class='input' v-model="comment" placeholder="Place your comment here!"/>
		<div>
			<button class="button" @click="submitReport">Submit report</button>
		</div>
	</div>
</template>

<script lang="ts">
	import {defineComponent, ref} from "vue";
	import {useRoute} from "vue-router";
	import Card from '@/views/Card.vue';
	import type DetailEquipment from "@/models/DetailEquipment";


	type StatusForForm = "0" | "1" | "null";
	type StatusForPOST = boolean | null;

	export default defineComponent({
		name: "AddReport",
		components: {Card},
		setup() {
			const route = useRoute();
			const gymId = parseInt(route.params.gymId as string);
			const equipmentId = parseInt(route.params.equipmentId as string);
			const equipmentRef = ref<DetailEquipment>(null as unknown as DetailEquipment);

			const statusRef = ref<StatusForForm>("null");
			const commentRef = ref<string>('');

			fetchEquipment()
					.then(equipment => equipmentRef.value = equipment);

			function fetchEquipment(): Promise<DetailEquipment> {
				return fetch(`http://localhost:8000/api/gym/${gymId}/equipment/${equipmentId}`)
						.then(res => res.json() as Promise<DetailEquipment>);
			}

			function getStatusForPOST(statusFromForm: StatusForForm): StatusForPOST {
				switch (statusFromForm) {
					case "0":
						return false;
					case "1":
						return true;
					case "null":
						return null;
				}
			}

			function submitReport(): void {
				fetch(`http://localhost:8000/api/gym/${gymId}/equipment/${equipmentId}`, {
					method: 'POST',
					body: JSON.stringify({
						status: getStatusForPOST(statusRef.value),
						comment: commentRef.value
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
			}

			return {
				comment: commentRef,
				status: statusRef,
				equipment: equipmentRef,
				submitReport
			}
		}
	});
</script>

<style scoped lang="scss">
	.title {
		font-size: 36.56px;
		color: #FDFDFD;
		padding: 10px;
	}

	.details {
		font-size: 18.56px;
		color: #FDFDFD;
		margin: 10px 10px 10px 5px;
	}

	.button {
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

	.button:hover {
		color: rgb(0, 0, 0);
		cursor: pointer;
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
	}

	.input {
		background-color: #242A34;
		padding: 10px;
		border-radius: 8.2719px;
		color: #FDFDFD;
	}

	.container {
		background-color: var(--vt-c-grey-soft);
		padding: 20px 10px 0;
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
		border-radius: 8px;
		background-color: #242A34;
		color: #FFFFFF;
		padding: 10px;
		border: none;
		box-shadow: 1px 8px 16px 0 rgba(0, 0, 0, 0.2);
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
		box-shadow: 1px 8px 16px 0 rgba(0, 0, 0, 0.6);
		background-color: hsla(254, 100%, 37%, 0.2);
		cursor: pointer;
	}
</style>
