<template>
	<div id="app">
		<!-- <TypeSelector :txt="test"/> -->
		<Varchar name="test" placeholderVal="input yout text">
			Test label:
		</Varchar>
		<List v-model="list" phName="input field name" phVal="input field val">
			Test label:
		</List>
		<Radio v-model="selectItem" :list="preferences.radio">
			Test label:
		</Radio>
		<Checkbox v-model="arr" :list="preferences.checkbox">
			Test label:
		</Checkbox>
		<ImageLoader v-model="files" count="3">
			Test label:
		</ImageLoader>
		<Arr v-model="arr" placeholder="input">
			Test label:
		</Arr>
	</div>
</template>

<script>

// import TypeSelector from './components/TypeSelector.vue';
import Varchar from './components/inputs/varchar.vue';
import List from './components/inputs/list.vue';
import Radio from  './components/inputs/radio.vue';
import Checkbox from './components/inputs/checkbox.vue';
import ImageLoader from './components/inputs/imageLoader.vue';
import Arr from './components/inputs/arr.vue';

import preferences from './preferences.js';

export default {
	name: 'App',
	components: {
		Varchar,
		Arr,
		List,
		Radio,
		Checkbox,
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
		font-family: Arial;
		font-size: 16px;
		background: #efebf0;
	}
	.btn {
		position: relative;
		padding: 0 10px;
		margin-top: 10px;
		min-height: 35px;
		background: #1d2939;
		border: none;
		border-radius: 3px;
		color: #fff;
		font-size: 19.2px;
		font-size: 1.1rem;
		letter-spacing: 1px;
		transition: .3s;
	}
	.btn:hover {
		background: rgb(28, 175, 154);
	}
	.rm {
		/*display: block;*/
		margin-left: 10px;
		width: 25px;
		height: 25px;
		text-align: center;
		padding: 3px;
		border: none;
		border-radius: 3px;
		background-color: red;
		color: #fff;
		transition: .3s;
	}
	.rm:hover {
		transform: scale(1.1);
	}
	.input_container {
		display: flex;
		padding: 10px;
	}
	.input_container:nth-child(2n) {
		background-color: #dfdfdf;
	}
	.input_label {
		padding-right: 10px;
		width: 20%;
		text-align: right;
	}

	.input_text {
		padding: 2px 5px;
		border: 1px solid #bbb;
		border-radius: 3px;
		min-height: 35px;
		max-width: 500px;
		font-size: 16px;
		font-size: 1rem;
	}
	.input_listItem + .input_listItem {
		margin-top: 5px;
	}
	.input_check {
		display: block;
	}
</style>