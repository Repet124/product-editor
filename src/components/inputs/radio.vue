<template>
	<div  class="input_container">
		<label class="input_label" :for="ident">
			<slot></slot>
		</label>
		<div class="input_wrapper">
			<label v-for="(val, name, index) in list" :key="index" class="input_check">
				<input type="radio" :value="name" :name="ident" :checked="value === name" @change="$emit('change', name)">
				{{ val }}
			</label>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Radio',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: ['value', 'list'],
	data: function() {
		return {
			ident: Math.random(),
			placeholder: this.placeholderVal
		}
	}
}

</script>