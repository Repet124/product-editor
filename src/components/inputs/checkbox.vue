<template>
	<div class="input_container">
		<label class="input_label">
			<slot></slot>
		</label>
		<div class="input_wrapper">
			<label v-for="(item, index) in list" :key="index" class="input_check">
				<input type="checkbox" :value="name" :name="ident" :checked="value.includes(item.val)" @change="$emit('change', ch(item.val, value.includes(item.val)))">
				{{ item.name }}
			</label>
		</div>
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