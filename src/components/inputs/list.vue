<template>
	<div>
		<label :for="ident">
			<slot></slot>
		</label>
		<ListItem v-for="(item, index) in list" :key="index" :name="item.name" :val="item.val" @input="$emit('input', ch(index, $event))"/>
	</div>
</template>

<script>

import ListItem from './list-item.vue';

export default {
	name: 'List',
	components: {
		ListItem
	},
	model: {
		prop: 'value',
		event: 'input'
	},
	props: ['value'],
	data: function() {
		return {
			ident: 'ident'+this.name,
			list: this.value,
			placeholder: this.placeholderVal
		}
	},
	methods: {
		ch: function(index, obj) {
			let newArr = [...this.list];
			newArr[index] = obj;
			return newArr;
		}
	}
}

</script>

<style>
	.input {
		padding: 5px 8px;
		border-radius: 5px;
		border: 1px solid #000;
		font-size: 16px;
	}
</style>