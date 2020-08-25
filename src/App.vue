<template>
	<div id="app">
		<!-- <TypeSelector :txt="test"/>
		<Varchar name="test" placeholderVal="input yout text">
			Some label:
		</Varchar>
		<List v-model="list" phName="input field name" phVal="input field val"></List>
		<Radio v-model="selectItem" :list="preferences.radio">
			Radio component
		</Radio>
		<Checkbox v-model="arr" :list="preferences.checkbox"></Checkbox> -->
		<ImageLoader count="3" :defaultImages="files"></ImageLoader>
	</div>
</template>

<script>

// import TypeSelector from './components/TypeSelector.vue';
// import Varchar from './components/inputs/varchar.vue';
// import List from './components/inputs/list.vue';
// import Radio from  './components/inputs/radio.vue';
// import Checkbox from './components/inputs/checkbox.vue';
import ImageLoader from './components/inputs/imageLoader.vue';

import preferences from './preferences.js';

export default {
	name: 'App',
	components: {
		// Varcha4r
		// List,
		// Radio,
		// Checkbox,
		ImageLoader
	},
	data: function() {
		return {
			list: [
				{
					name: 'test name',
					val: 'test val'
				}
			],
			selectItem: 'second',
			arr: ['first', 'second'],
			preferences: preferences,
			files: [
				{
					url: 'https://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
					file: false
				},
				{
					url: 'https://image.made-in-china.com/202f0j10jzGfdkZWbYqH/Pink-Electric-Fluffy-Cat-Plush-Stuffed-Toy-for-Children.jpg',
					file: false
				}
			],
			// files : [
			// 	'https://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
			// 	'https://image.made-in-china.com/202f0j10jzGfdkZWbYqH/Pink-Electric-Fluffy-Cat-Plush-Stuffed-Toy-for-Children.jpg'
			// ]
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