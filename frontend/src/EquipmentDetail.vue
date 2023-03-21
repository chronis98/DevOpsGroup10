<template>
	<div class="title">{{ equipmentName }}</div>
	<div class="center">
		<div class="container" v-if="equipment">
			<div class="flex-topwards">
				<img class="image" :src="equipment.imgPath" :alt="equipment.name">
				<div class="details-container">
					<template v-for="field in fields">
						<label>{{ field.label }}: </label> <span>{{ field.value }}</span>
					</template>
				</div>
			</div>
			<div class="card-container">
				<div v-for="report in  reports">
					<Card @click="navigateToReportsOverview">
						<div class="gym_title">{{ report }}</div>
					</Card>
				</div>
			</div>
			<div class="flex-bottomwards">
				<div class="buttons-container">
					<button class="button" type="button" @click="navigateToReportsAdd()">Add Report</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {computed, defineComponent, ref} from "vue";
	import {useRoute, useRouter} from "vue-router";
	import {RouteName} from "@/router";
	import Card from '@/views/Card.vue';
	import Reports from '@/views/Reports.vue';
	import Equipment from "./models/Equipment";

	type Field = {
		label: string;
		value: string;
	}

	export default defineComponent({
		name: "EquipmentDetail",
		components: {
			Card,
			Reports
		},
		setup() {
			const equipmentRef = ref<Equipment | null>(null);
			const route = useRoute();
			const equipmentName = route.params.equipmentName as string;
			const gymName = route.params.gymName as string;
			const reports = ["test", "awful", "should be careful with that ding ding", "asdad", "asdads"];
			getEquipment(equipmentName).then(equipment => equipmentRef.value = equipment);
			const router = useRouter();

			async function getEquipment(name: string): Promise<Equipment> {
				return {
					imgPath: "https://www.bestusedgymequipment.com/wp-content/uploads/2018/04/olympic-flat-bench-300x300.jpg",
					name: "",
					firstAdded: new Date(),
					reports: 10,
					confirmed: new Date()
				};
			}

			const fields = computed((): Field[] => {
				const equipment = equipmentRef.value;

				if (!equipment) {
					return [];
				}

				return [{
					label: 'First added',
					value: equipment.firstAdded.toLocaleString()
				}, {
					label: 'Reports',
					value: equipment.reports.toString()
				}, {
					label: 'Confirmed',
					value: equipment.confirmed.toLocaleString()
				}];
			});

			function navigateToReportsOverview(): void {
				router.push({name: RouteName.REPORTS, params: {gymName: gymName, equipmentName: equipmentName}});
			}

			function navigateToReportsAdd(): void {
				router.push({name: RouteName.REPORTS_ADD, params: {gymName: gymName, equipmentName: equipmentName}});
			}

			return {
				equipment: equipmentRef,
				equipmentName,
				reports,
				navigateToReportsOverview,
				navigateToReportsAdd,
				fields
			}
		}
	});
</script>

<style scoped lang="scss">
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.title {
		font-size: 36px;
		color: #FDFDFD;
		padding: 10px;
	}

	.container {
		background-color: var(--vt-c-grey-soft);
		padding: 20px 10px 0;
		border-radius: 3px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		height: 100%;
		width: 100%;
	}

	.card-container {
		background-color: var(--vt-c-grey-soft);
		border-radius: 3px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 10px;
		width: 100%;
	}

	.flex-topwards {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.flex-bottomwards {
		display: flex;
		justify-content: flex-end;
		width: 100%;
	}

	.details-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.buttons-container {
		align-self: flex-end;
		display: flex;
		gap: 10px;
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
	}

	.image {
		max-height: 20vh;
		margin: 0 0 20px 0;
		border-radius: 8px;
		width: 150px;
	}

	.gym_title {
		margin: auto;

	}
</style>
