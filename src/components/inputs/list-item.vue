<template>
	<div>
		<input
			class="input"
			type="text"
			:value="name"
			@input="$emit('input', ch('name', $event.target.value))"
			:placeholder="placeholderObj.name"
		>
		:
		<input
			class="input"
			type="text"
			:value="val"
			@input="$emit('input', ch('val', $event.target.value))"
			:placeholder="placeholderObj.val"
		>
		<button class="btn" @click="$emit('rm')">Х</button>
	</div>
</template>

<script>

export default {
	name: 'ListItem',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: ['name', 'val', 'value', 'placeholderObj'],
	methods: {
		ch: function(property, val) {
			let resultObj = {
					name: this.name,
					val: this.val
				},
				additionalObj = {};
			additionalObj[property] = val;
			return {...resultObj, ...additionalObj};
		}
	}
}

</script>