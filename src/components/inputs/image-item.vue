<template>
	<div class="imagePreview">
		<button class="rm imagePreview_rm" @click="$emit('rm')">X</button>
		<img class="imagePreview_img" :src="src">
	</div>
</template>

<script>

export default {
	name: 'ImageItem',
	props: ['src']
}

</script>

<style>
	.imagePreview {
		position: relative;
		width: 200px;
		height: 150px;
	}
	.imagePreview_img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.imagePreview_rm {
		position: absolute;
		top: -5px;
		right: -5px;
	}
	.imagePreview + .imagePreview {
		margin-left: 10px;
	}
</style>