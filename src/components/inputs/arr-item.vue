<template>
	<div>
		<input
			class="input"
			type="text"
			:value="value"
			@input="$emit('input', $event.target.value)"
			:placeholder="placeholder"
		>
		<button class="btn" @click="$emit('rm')">Х</button>
	</div>
</template>

<script>

export default {
	name: 'ArrItem',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: ['value', 'placeholder']
}

</script>