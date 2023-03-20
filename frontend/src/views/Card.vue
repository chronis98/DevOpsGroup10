<template>
	<div class="card">
		<slot>
		</slot>
	</div>
</template>

<style scoped lang="scss">
	.card {
		box-shadow: 1px 8px 16px 0 rgba(0, 0, 0, 0.2);;
		transition: 0.2s;
		display: flex;
		gap: 20px;
		align-items: center;
		background-color: #242A34;
		border-radius: 8px;
		text-align: center;
		padding: 10px;
	}

	.card:hover {
		box-shadow: 1px 8px 16px 0 rgba(0, 0, 0, 0.6);
		background-color: hsla(254, 100%, 37%, 0.2);
		cursor: pointer;
	}
</style>
