<template>


	<div class="Title">Gym Overview</div>
	<br><br>
	<!-- <div class="outer"> -->

	<div v-for="l in locations">
		<!-- <div class="card" v-on:click="handleClick(l),$emit('GymItem',l.name)"> -->
		<div class="card" @click="handleClick(l.name)">
			<img src="@/assets/Gymicon.png"/>
			<!-- <v-img src="@/assets/Gymicon.jpg" alt=""
			contain
			height="100px"
			width="150px"> -->
			<!-- </v-img> -->
			<!-- <img src="img_avatar.png" alt="Avatar" style="width:100%"> -->
			<!-- <div class="container"> -->
			{{ l.name }}<br>
			{{ l.date }}
			<!-- </div> -->
		</div>


	</div>
	<!-- </div> -->

	<!-- <div class="outer">

		<div class="card">

			<img src="img_avatar.png" alt="Avatar" style="width:100%">
			<div class="container">
				John Doe
				<p>Architect & Engineer</p>
			</div>

		</div>
	</div> -->

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
				{name: 'Basic-Fit Amsterdam', date: '11/02/2022', numberOfPeople: 4, complete: true},
				{name: 'Basic-Fit Amsterdam West', date: '12/01/2022', numberOfPeople: 2, complete: true},
				{name: 'Basic-Fit Leiden', date: '04/06/2021', numberOfPeople: 6, complete: true},
				{name: 'Power-Fit Diemen', date: '08/10/2021', numberOfPeople: 10, complete: true},
				{name: 'Get-Fit Hilversum', date: '12/12/2022', numberOfPeople: 14, complete: true},
				{name: 'Get-Fit Utrecht', date: '10/02/2023', numberOfPeople: 12, complete: false},
				{name: 'Get-Fit Den Haag', date: '04/02/2020', numberOfPeople: 2, complete: true}
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

<style scoped lang="scss">

	@media (hover: hover) {
		.card:hover, a:hover, .radius:hover {
			background-color: hsla(254, 100%, 37%, 0.2);
			color: rgb(16, 104, 142);

		}
	}

	@media (min-width: 300px) {
		body {
			display: flex;
			place-items: center;
			background-color: #181a1f;
		}
		text
		#app {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 0 2rem;
		}

		.Title {

			//font-family: 'Inter';
			font-style: 'large';
			font-size: 36.56px;
			// line-height: 64px;
			// line-height: 100%;
			//right: 20px;
			color: #FDFDFD;
			margin: 5px;
			// Align: Left
			// Vertical align: Top


		}
		img {
			width: 35px;
			height: 30px;
			display: absolute;
			// float: left;
			//margin-left: 0;
			// left : 5px;
			// top : 7px;
			// margin-right: 20px;
			border-radius: 10%;

			// width: 50%;
			//height: auto;
		}

		.container {
			//height: 200px;
			position: relative;
			//border: 3px solid #FFFFFF;
			border: 2.6px solid #0f0101;
			border-radius: 7.2719px;
			display: block;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
		}

		.right {
			float: right
		}

		.card {
			/* Add shadows to create the "card" effect */
			box-shadow: 1px 1px 0px 0px #17191e;
			//text-align: center;
			transition: 0.2s;
			display: flex;
			justify-content: space-between;

			// display: flex;
			align-items: center;
			// align-content: space-around;
			background-color: #242A34;
			border: px solid #17191e;
			border-radius: 8.2719px;

			// margin-left: auto;
			// margin-right: auto;
			// width: 100%;
			margin: 10px;
			min-height: 45px;
			padding: 5%;


		}
		.outer {
			box-shadow: 0px 100px 16px 0 rgba(134, 88, 214, 0.2);
			//border-radius: 40.2719px;
			text-align: center;
			transition: 0.2s;
			display: block;
			//background-color: #FFFFFF;
			// margin-left: auto;
			// margin-right: auto;
			// width: 100%;
			margin: 10px;
		}

		/* On mouse-over, add a deeper shadow */
		.card:hover, .plus:hover {
			box-shadow: 0px 10px 16px 0 rgba(0, 0, 0, 0.901);
			cursor: pointer;

			border-radius: 20.2719px;
		}

		/* Add some padding inside the card container */
		// .container {
		//   padding: 1px 8px;
		// }


		.Details, label, text {


			position: relative;


			// font-family: 'Inter';
			font-style: normal;
			font-weight: 400;

			margin: 10px;
			//font-size: 26.2783px;
			//line-height: 32px;
			// right: 15px;
			color: #e1e1e3;;

		}


		p, input {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
			font-size: 30.3843px;
			//line-height: 37px;
			margin: 10px;
			color: #FFFFFF;
		}
		.plus {
			display: relative;
			float: left;
			margin: 5px;
			// align-items: center;
			right: -8px;
			--b: 4px; /* the thickness */
			width: 38px; /* the size */

			aspect-ratio: 1;
			border: 10px solid #0375F7; /* the outer space */
			border-radius: 50%;
			background: conic-gradient(from 90deg at var(--b) var(--b), #0375F7 90deg, #fff 0) calc(100% + var(--b) / 2) calc(100% + var(--b)/2)/
      calc(50%  + var(--b)) calc(50% + var(--b));

		}
		.plus:hover {
			background: conic-gradient(from 90deg at var(--b) var(--b), green 90deg, hsla(254, 100%, 37%, 0.2) 0) calc(100% + var(--b) / 2) calc(100% + var(--b)/2)/
    calc(50%  + var(--b)) calc(50% + var(--b));
		}

		.radius {
			border-radius: 50%;
			border-radius: 11px;
			display: block;
			float: left;
			position: absolute;
		}

		.regular-checkbox {
			box-sizing: border-box;

			//position: absolute;
			width: 36.95px;
			height: 32.85px;
			// left: 95px;
			// top: 998px;

			background: #363945;
			border: 2.46359px solid #D9D9D9;
			border-radius: 4.10599px;
		}


		.crosssign {
			display: block;
			float: left;
			top: 8px;
			margin: 6px;
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

		.equipment_details {
			color: #8d8d8ee6;
			margin-bottom: 6px;
			display: relative;
		}

		.checkmark {
			display: absolute;
			float: left;
			// top : 8px;
			// margin: 6px;
			// margin-right: 20px;
			width: 22px;
			height: 22px;
			-ms-transform: rotate(45deg); /* IE 9 */
			-webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
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


		.vertical-center {
			margin: 0;
			position: absolute;
			top: 50%;
			-ms-transform: translateY(-50%);
			transform: translateY(-50%);
		}


	}


</style>
