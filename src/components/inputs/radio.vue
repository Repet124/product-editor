<template>
	<div>
		<slot></slot>
		<br>
		<label v-for="(val, name, index) in list" :key="index">
			<input type="radio" :value="name" :name="ident" :checked="value === name" @change="$emit('change', name)">
			{{ val }}
		</label>
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