<template>
	<div class="input_container">
		<label class="input_label">
			<slot></slot>
		</label>
		<div class="input_wrapper">
			<ArrItem 
				v-for="(item, index) in value"
				:key="index"
				:placeholder="placeholder"
				:value="item"
				@input="$emit('change', ch(index, $event))"
				@rm="$emit('change', rm(index))"
			>
			</ArrItem>
			<button class="btn" @click="$emit('change', add())">Add</button>
		</div>
	</div>
</template>

<script>

import ArrItem from './arr-item.vue';

export default {
	name: 'Arr',
	components: {
		ArrItem
	},
	model: {
		prop: 'value',
		event: 'change'
	},
	props: ['value', 'placeholder'],
	data: function() {
		return {
			test: 'some text'
		}
	},
	methods: {
		add: function() {
			let arr = [...this.value];
			arr.push('');
			return arr;
		},
		ch: function(index, value) {
			let arr = [...this.value];
			arr[index] = value;
			return arr;
		},
		rm: function(index) {
			let arr = [...this.value];
			arr.splice(index, 1);
			return arr;
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