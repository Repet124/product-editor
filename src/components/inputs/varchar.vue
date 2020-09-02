<template>
	<div  class="input_container">
		<label class="input_label" :for="ident">
			<slot></slot>
		</label>
		<div class="input_wrapper">
			<input class="input_text" :id="ident" type="text" :name="name" :value="value" @input="$emit('change', $event.value)" :placeholder="placeholder">
		</div>
	</div>
</template>

<script>

export default {
	name: 'Varchar',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: ['name', 'value', 'placeholderVal'],
	data: function() {
		return {
			ident: 'ident'+this.name,
			placeholder: this.placeholderVal
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