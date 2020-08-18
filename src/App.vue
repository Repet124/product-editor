<template>
	<div id="app">
		<!-- <TypeSelector :txt="test"/> -->
		<Varchar name="test" placeholderVal="input yout text">
			Some label:
		</Varchar>
	</div>
</template>

<script>

// import TypeSelector from './components/TypeSelector.vue';
import Varchar from './components/inputs/varchar.vue';

export default {
	name: 'App',
	components: {
		Varchar
	}
}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		outline: none;
	}
	#app {
		padding: 50px;
		font-family: Arial;
		font-size: 16px;
		background: #d8dcf0;
	}
	.btn {
		padding: 10px;
		color: #fff;
		border-radius: 5px;
		background-color: #312c69;
	}
</style>