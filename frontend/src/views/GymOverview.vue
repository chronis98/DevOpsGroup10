<template>
	<div class="Title">Gym Overview</div>
	<br><br>
	<div v-for="l in locations">
		<CardComponent
			source="https://img.freepik.com/premium-vector/barbell-dumbbell-gym-icon-logo-template-gym-badge-fitness-logo-design_757387-345.jpg?w=2000"
			name='' :date="l.date" v-on:click.native="handleClick(l.name)">
			<div class="gymTitle"> {{ l.name }} </div>
		</CardComponent>
	</div>
</template>


<script lang="ts">
import GymDetails from '../views/GymDetails.vue';
import { defineComponent } from "vue";
import type { Location } from "@/views/GymDetails.vue";
import { useRouter } from "vue-router";
import { RouteName } from "@/router";
import HelloWorld from '../components/HelloWorld.vue'
import CardComponent from '../views/CardComponent.vue';

export default defineComponent({
	components: {
		GymDetails,
		HelloWorld,
		CardComponent,
	},
	name: 'GymOverview',
	setup() {
		const locations: Location[] = [
			{ name: 'Basic-Fit Amsterdam', date: '11/02/2022', numberOfPeople: 4, complete: true },
			{ name: 'Basic-Fit Amsterdam West', date: '12/01/2022', numberOfPeople: 2, complete: true },
			{ name: 'Basic-Fit Leiden', date: '04/06/2021', numberOfPeople: 6, complete: true },
			{ name: 'Power-Fit Diemen', date: '08/10/2021', numberOfPeople: 10, complete: true },
			{ name: 'Get-Fit Hilversum', date: '12/12/2022', numberOfPeople: 14, complete: true },
			{ name: 'Get-Fit Utrecht', date: '10/02/2023', numberOfPeople: 12, complete: false },
			{ name: 'Get-Fit Den Haag', date: '04/02/2020', numberOfPeople: 2, complete: true }
		];
		const router = useRouter();
		function handleClick(name: string): void {
			router.push({ name: RouteName.GYM_DETAILS, params: { name } });
		}

		return {
			locations,
			handleClick
		};
	}
});

</script>

<style scoped lang="scss">
.Title {
	font-style: 'large';
	font-size: 36.56px;
	color: #FDFDFD;
	margin: 5px;
}

img {
	width: 50px;
	height: 50px;
	display: absolute;
	border-radius: 10%;
}

.gymTitle {
	margin: auto;

}
</style>
