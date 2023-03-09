<template>


	<div class="Title">Gym Overview</div>
	<br><br>
	<div class="outer">

		<div v-for="l in locations">
			<!-- <div class="card" v-on:click="handleClick(l),$emit('GymItem',l.name)"> -->
			<div class="card" @click="handleClick(l.name)">
				<!-- <img src="img_avatar.png" alt="Avatar" style="width:100%"> -->
				<div class="container">
					{{ l.name }}<br>
					{{ l.date }}
				</div>
			</div>

		</div>
	</div>

	<div class="outer">

		<div class="card">

			<!-- <img src="img_avatar.png" alt="Avatar" style="width:100%"> -->
			<div class="container">
				John Doe
				<p>Architect & Engineer</p>
			</div>

		</div>
	</div>

</template>

<!-- <style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}

}


</style> -->

<!-- <script lang="ts">

	</script> -->

<script lang="ts">
	import GymDetails from '../views/GymDetails.vue';
	import {defineComponent} from "vue";
	import type {Location} from "@/views/GymDetails.vue";
	import {useRouter} from "vue-router";
	import {RouteName} from "@/router";

	export default defineComponent({
		components: {
			GymDetails
		},
		name: 'GymOverview',
		setup() {
			const locations: Location[] = [
				{name: 'London', date: '11/02/2022', numberOfPeople: 4, complete: true},
				{name: 'Paris', date: '12/01/2022', numberOfPeople: 2, complete: true},
				{name: 'Tokyo', date: '04/06/2021', numberOfPeople: 6, complete: true},
				{name: 'Mumbai', date: '08/10/2021', numberOfPeople: 10, complete: true},
				{name: 'New York', date: '12/12/2022', numberOfPeople: 14, complete: true},
				{name: 'Dubai', date: '10/02/2023', numberOfPeople: 12, complete: false},
				{name: 'Shanghai', date: '04/02/2020', numberOfPeople: 2, complete: true}
			];

			const router = useRouter();

			function handleClick(name: string): void {
				router.push({name: RouteName.GYM_DETAILS, params: {name}});
			}

			return {
				locations,
				handleClick
			};
		}
	});

</script>
