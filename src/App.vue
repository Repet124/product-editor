<template>
	<div id="app">
		<!-- <TypeSelector :txt="test"/> -->
		<!-- <Varchar name="test" placeholderVal="input yout text">
			Some label:
		</Varchar> -->
		<List v-model="list" phName="input field name" phVal="input field val"></List>
		<Radio v-model="selectItem" :list="preferences.radio">
			Radio component
		</Radio>
	</div>
</template>

<script>

// import TypeSelector from './components/TypeSelector.vue';
// import Varchar from './components/inputs/varchar.vue';
import List from './components/inputs/list.vue';
import Radio from  './components/inputs/radio.vue';

import preferences from './preferences.js';

export default {
	name: 'App',
	components: {
		// Varcha4r
		List,
		Radio
	},
	data: function() {
		return {
			list: [
				{
					name: 'test name',
					val: 'test val'
				}
			],
			selectItem: 'first',
			preferences: preferences
		}
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