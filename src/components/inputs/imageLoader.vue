<template>
	<div>
		<input type="file" ref="input" :multiple="multiple > 1" hidden @change="show">
		<div class="imagePreview_wrapper" v-if="images.length !== 0">
			<ImageItem v-for="(img, index) in images" :key="index" :src="img.url" @rm="rm(index)"></ImageItem>
		</div>
		<button v-if="images.length < multiple" @click="load">Add image</button>
	</div>
</template>

<script>

import ImageItem from './image-item.vue';

function parseDefaultImages(images) {
	if (!images) return [];

	if (!(images instanceof Array)) images = [images];

	if (images.every(item => item.url !== undefined && item.file !== undefined)) return images;

	return images.map(item => ({
		url: item,
		file: false
	}))
}

export default {
	name: 'ImageLoader',
	components: {
		ImageItem
	},
	props: ['count', 'defaultImages'],
	data: function() {
		return {
			images: parseDefaultImages(this.defaultImages),
			multiple: this.count ? this.count : 1
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