<template>
	<div>
		<h2>
			<slot></slot>
		</h2>
		<div class="typeSelector_container">
			<button class="btn typeSelector_btn"
				v-for="(item, ident) in list"
				:key="ident"
				@click="$emit('change', ident)"
			>
				{{item}}
			</button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'TypeSelector',
	model: {
		prop: 'type',
		event: 'change'
	},
	props: ['type', 'list']
}

</script>

<style>
	.typeSelector_container {
		padding: 10px 0;
		display: flex;
		/*justify-content: space-between;*/
	}
	.btn.typeSelector_btn {
		margin-top: 0;
		width: 20%;
	}
	.typeSelector_btn + .typeSelector_btn {
		margin-left:  10px;
	}
</style>