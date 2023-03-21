<template>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<div class="title">{{ gym ? gym.name : '' }}</div>
	<br><br>
	<div class="container" v-if="gym">
		<div v-for="equipment in gym.equipments">
			<Card @click="viewDetails(equipment.id)">
				<div class="image-container">
					<img
							src="https://static.vecteezy.com/system/resources/previews/015/845/432/original/gym-station-for-fitness-equipment-gym-station-icon-suitable-for-apps-website-developer-graphic-designer-needs-on-white-background-free-vector.jpg"/>
				</div>
				<div class="gym_title"> {{ equipment.name }}</div>
				<div v-if="equipment.status === 1 || equipment.status === null">
          <span class="checkmark">
            <div class="checkmark_circle"></div>
            <div class="checkmark_stem"></div>
            <div class="checkmark_kick"></div>
          </span>
				</div>
				<div v-else>
          <span class="crosssign">
            <div class="crosssign_circle"></div>
            <div class="crosssign_stem"></div>
            <div class="crosssign_stem2"></div>
          </span>
				</div>
			</Card>
		</div>

	</div>
	<div @click="addEquipment(gymName)" class="plus radious">
	</div>
</template>

<script lang="ts">

	import {defineComponent, ref} from "vue";
	import {useRoute, useRouter} from "vue-router";
	import {RouteName} from "@/router";
	import Card from '../views/Card.vue';
	import type {DetailGym} from "@/models/Gym";

	export default defineComponent({
		components: {Card},
		name: "GymDetails",
		setup() {
			const route = useRoute();
			const gymRef = ref<DetailGym | null>(null);
			const router = useRouter();
			const gymId = route.params.gymId;
			fetchGym().then(gym => gymRef.value = gym);

			function fetchGym(): Promise<DetailGym> {
				return fetch(`http://localhost:8000/api/gym/${gymId}`)
						.then(res => res.json() as Promise<DetailGym>);
			}

			console.log(gymRef.value);
			if (!gymId) {
				const router = useRouter();
				router.push({name: RouteName.GYM_OVERVIEW});
			}

			const card = document.getElementById("test");
			console.log(card);

			function addEquipment(name: string): void {
				router.push({name: RouteName.EQUIPMENT_ADD, params: {gymId}});
			}

			function viewDetails(name: string): void {
				router.push({name: RouteName.EQUIPMENT_DETAILS, params: {gymId, equipmentId: name}});
			}

			return {
				gymId,
				gym: gymRef,
				addEquipment,
				viewDetails,
				Card
			};
		},
	})

</script>
<style scoped lang="scss">
	#app {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
		font-weight: normal;
	}

	.title {
		font-size: 36.56px;
		color: #FDFDFD;
		padding: 10px;
	}

	.card .image-container {
		width: 50px;
		height: 50px;

		img {
			width: 100%;
			height: 100%;
			border-radius: 10%;
		}
	}

	.plus:hover {
		box-shadow: 0px 10px 16px 0 rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}

	.plus {
		display: relative;
		float: right;
		margin: 0 20px 0 0;
		right: -8px;
		--b: 4px;
		width: 38px;
		aspect-ratio: 1;
		border: 10px solid #0375F7;
		border-radius: 50%;
		background: conic-gradient(from 90deg at var(--b) var(--b), #0375F7 90deg, #fff 0) calc(100% + var(--b) / 2) calc(100% + var(--b)/2)/ calc(50% + var(--b)) calc(50% + var(--b));
	}

	.plus:hover {
		background: conic-gradient(from 90deg at var(--b) var(--b), #0375F7 90deg, rgb(0, 0, 0) 0) calc(100% + var(--b) / 2) calc(100% + var(--b)/2)/ calc(50% + var(--b)) calc(50% + var(--b));
	}

	.crosssign {
		display: block;
		float: left;
		width: 22px;
		height: 22px;
		transform: rotate(45deg);
	}

	.crosssign_circle {
		position: absolute;
		width: 22px;
		height: 22px;
		background-color: red;
		border-radius: 11px;
		left: 0;
		top: 0;
	}

	.crosssign_stem,
	.crosssign_stem2 {
		position: absolute;
		background-color: #fff;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.crosssign_stem {
		width: 3px;
		height: 9px;
	}

	.crosssign_stem2 {
		width: 9px;
		height: 3px;
	}

	.checkmark {
		display: absolute;
		float: left;
		width: 22px;
		height: 22px;
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.checkmark_circle {
		position: block;
		width: 22px;
		height: 22px;
		background-color: green;
		border-radius: 11px;
		left: 0;
		top: 0;
	}

	.checkmark_circle {
		position: block;
		width: 22px;
		height: 22px;
		background-color: green;
		border-radius: 11px;
		left: 0;
		top: 0;
	}

	.checkmark_stem {
		position: absolute;
		width: 3px;
		height: 9px;
		background-color: #fff;
		left: 11px;
		top: 6px;
	}

	.checkmark_kick {
		position: absolute;
		width: 3px;
		height: 3px;
		background-color: #fff;
		left: 8px;
		top: 12px;
	}

	.gym_title {
		margin: auto;

	}

	.container {
		background-color: var(--vt-c-grey-soft);
		padding: 10px;
		border-radius: 3px;
		display: flex;
		flex-direction: column;
		align-items: inherit;
		justify-content: flex-start;
		gap: 10px;
		// height: 100%;
	}
</style>
