<template>
	<div class="input_listItem">
		<input
			class="input_text"
			type="text"
			:value="value"
			@input="$emit('input', $event.target.value)"
			:placeholder="placeholder"
		>
		<button class="rm" @click="$emit('rm')">Х</button>
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