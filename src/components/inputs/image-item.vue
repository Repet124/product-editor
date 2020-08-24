<template>
	<div class="imagePreview">
		<button class="imagePreview_rm" @click="$emit('rm')">X</button>
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
		display: block;
		top: -5px;
		right: -5px;
		width: 25px;
		height: 25px;
		text-align: center;
		padding: 3px;
		border: none;
		border-radius: 3px;
		background-color: red;
		color: #fff;
	}
	.imagePreview + .imagePreview {
		margin-left: 10px;
	}
</style>