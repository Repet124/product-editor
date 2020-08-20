<template>
	<div>
		<slot></slot>
		<br>
		<label v-for="(item, index) in list" :key="index">
			<input type="checkbox" :value="name" :name="ident" :checked="value.includes(item.val)" @change="$emit('change', ch(item.val, value.includes(item.val)))">
			{{ item.name }}
		</label>
	</div>
</template>

<script>

export default {
	name: 'Checkbox',
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
	}, methods: {
		ch: function(val, checked) {
			if (checked) {
				this.value.splice(this.value.indexOf(val), 1);
				return this.value;
			}
			this.value.push(val);
			return this.value;
		}
	}
}

</script>