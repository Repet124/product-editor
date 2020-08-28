<template>
	<div class="identSelector_container">
		<ul>
			<li v-for="item in idents[type]" :key="item.ident" @click="$emit('change', item.ident)">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>

import idents from '../list.js';

export default {
	name: 'IdentSelector',
	model: {
		prop: 'ident',
		event: 'change'
	},
	props: ['type', 'ident'],
	data: function() {
		return {
			idents: idents
		}
	}
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