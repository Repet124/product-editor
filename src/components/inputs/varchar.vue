<template>
	<div class="input">
		<label :for="ident">
			<slot></slot>
		</label>
		<input :id="ident" type="text" :name="name" v-model="txt" :placeholder="placeholder">
	</div>
</template>

<script>

export default {
	name: 'Varchar',
	props: ['name', 'defaultValue', 'placeholder'],
	data: function() {
		return {
			ident: 'ident'+this.name,
			txt: this.defaultValue
		}
	}
}

</script>