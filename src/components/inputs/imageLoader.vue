<template>
	<div>
		<input type="file" ref="input" :multiple="multiple > 1" hidden @change="$emit('change', сh());">
		<div class="imagePreview_wrapper" v-if="images.length !== 0">
			<ImageItem v-for="(img, index) in images" :key="index" :src="img.url" @rm="$emit('change', rm(index));"></ImageItem>
		</div>
		<button v-if="images.length < multiple" @click="load">Add image</button>
	</div>
</template>

<script>

import ImageItem from './image-item.vue';

// function parseDefaultImages(images) {
// 	if (!images) return [];

// 	if (!(images instanceof Array)) images = [images];

// 	if (images.every(item => item.url !== undefined && item.file !== undefined)) return images;

// 	return images.map(item => ({
// 		url: item,
// 		file: false
// 	}))
// }

export default {
	name: 'ImageLoader',
	model: {
		prop: 'images',
		event: 'change'
	},
	components: {
		ImageItem
	},
	props: ['images', 'count'],
	data: function() {
		return {
			multiple: this.count ? this.count : 1
		}
	},
	methods: {
		сh: function() {
			let arr = [...this.images];

			Array.from(this.$refs.input.files).some(item => {
				if (arr.length >= this.multiple) {
					console.log('max count images equal '+this.multiple);
					return true;
				}
				arr[arr.length] = {
					url: URL.createObjectURL(item),
					file: item
				}
			})
			return arr;
		},
		load: function() {
			this.$refs.input.click()
		},
		rm: function(index) {
			let arr = [...this.images];
			arr.splice(index, 1)
			return arr;
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