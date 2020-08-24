<template>
	<div>
		<input type="file" ref="input" multiple hidden @change="show">
		<img v-for="(img, index) in images" :key="index" :src="img.url" width="200">
		<button @click="load">Add image</button>
	</div>
</template>

<script>

export default {
	name: 'ImageLoader',
	data: function() {
		return {
			images: [],
		}
	},
	methods: {
		show: function() {
			Array.from(this.$refs.input.files).forEach(item => {
				this.$set(this.images, this.images.length, {
					url: URL.createObjectURL(item),
					file: item
				})
			})
			console.log(this.files)
		},
		load: function() {
			this.$refs.input.click()
		}
	}
}

</script>