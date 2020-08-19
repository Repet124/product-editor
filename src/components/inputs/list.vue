<template>
	<div>
		<label :for="ident">
			<slot></slot>
		</label>
		<ListItem 
			v-for="(item, index) in list"
			:key="index"
			:name="item.name"
			:val="item.val"
			:placeholderObj="getPlaceholderObj"
			@input="$emit('input', ch(index, $event))"
			@rm="$emit('input', rm(index))"
		/>
		<button class="btn" @click="$emit('input', add())">Добавить</button>
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
	props: ['value', 'phName', 'phVal'],
	data: function() {
		return {
			ident: 'ident'+this.name,
			list: this.value,
			placeholder: this.placeholderVal
		}
	},
	methods: {
		ch: function(index, obj) {
			for (let key in obj) {
				this.list[index][key] = obj[key]
			}
			return this.list;
		},
		add: function() {
			this.list.push({
				name: '',
				val: ''
			});
			return this.list;
		},
		rm: function(index) {
			this.list.splice(index, 1);
			return this.list;
		}
	},
	computed: {
		getPlaceholderObj: function() {
			return {
				name: this.phName,
				val: this.phVal
			}
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