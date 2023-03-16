<script  lang="ts">
import {defineComponent} from "vue";
export default defineComponent({

	name: "CardComponent",
	props: {
		name: String,
		source: String
	}
		
});
</script>


<template>
		<div class="card" >
			<div>
				<img :src='source'/>
			</div>
			{{ name }}<br>
			<slot>

			</slot>
		</div>
</template>

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

		img {
			width: 45px;
			height: 40px;
			display: absolute;
			border-radius: 10%;
  		}
	}

		.card {
			/* Add shadows to create the "card" effect */
			box-shadow: 1px 1px 0px 0px #17191e;
			transition: 0.2s;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #242A34;
			border: px solid #17191e;
			border-radius: 8.2719px;
			text-align: center;
			margin: 10px;
			min-height: 45px;
			padding: 5%;
		}

		/* On mouse-over, add a deeper shadow */
		.card:hover {
			box-shadow: 0px 10px 16px 0 rgba(0, 0, 0, 0.901);
			cursor: pointer;

			border-radius: 20.2719px;
		}

</style>
