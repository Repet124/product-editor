<template>
	<div class="modal_wrapper" @click.self="$emit('reject')">
		<div class="modal_container">
			<h3 class="modal_header">{{ header }}</h3>
			<p class="modal_message">
				<slot></slot>
			</p>
			<button v-if="reject" class="btn" @click="$emit('reject')">{{ reject }}</button>
			<button v-if="resolve" class="btn" @click="$emit('resolve')">{{ resolve }}</button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Modal',
	props: ['header', 'message', 'resolve', 'reject', 'timeout'],
	data: function() {
		return {
		}
	}
}

</script>

<style>
	.modal_wrapper {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		z-index: 1000;
	}
	.modal_header, .modal_message {
		display: block;
	}
	.modal_container {
		position: relative;
		padding: 15px;
		max-width: 80%;
		min-width: 200px;
		background-color: #fff;
	}
	.modal_container .btn {
		float: right;
		margin-left: 10px;
	}
</style>