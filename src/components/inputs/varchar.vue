<template>
	<div>
		<label :for="ident">
			<slot></slot>
		</label>
		<input class="input" :id="ident" type="text" :name="name" v-model="txt" :placeholder="placeholder">
	</div>
</template>

<script>

export default {
	name: 'Varchar',
	props: ['name', 'defaultValue', 'placeholderVal'],
	data: function() {
		return {
			ident: 'ident'+this.name,
			txt: this.defaultValue,
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