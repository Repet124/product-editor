<template>
	<div class="identSelector_container">
		<ul>
			<li v-for="(name, ident) in list" :key="ident">{{ name }}</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'IdentSelector',
	props: ['list']
}

</script>

<style>
	.btn.typeSelector_btn {
		margin-top: 0;
		width: 20%;
	}
	.typeSelector_btn + .typeSelector_btn {
		margin-left:  10px;
	}
</style>