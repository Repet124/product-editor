<template>
	<div>
		<input type="file" ref="input" multiple hidden @change="show">
		<div class="imagePreview_wrapper" v-if="images.length !== 0">
			<ImageItem v-for="(img, index) in images" :key="index" :src="img.url" @rm="rm(index)"></ImageItem>
		</div>
		<button @click="load">Add image</button>
	</div>
</template>

<script>

import ImageItem from './image-item.vue';

export default {
	name: 'ImageLoader',
	components: {
		ImageItem
	},
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
		},
		rm: function(index) {
			this.$delete(this.images, index)
		}
	}
}

</script>

<style>
	.imagePreview_wrapper {
		display: flex;
		margin-bottom: 10px;
	}
</style>