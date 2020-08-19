<template>
	<div id="app">
		<!-- <TypeSelector :txt="test"/> -->
		<!-- <Varchar name="test" placeholderVal="input yout text">
			Some label:
		</Varchar> -->
		{{ list[0].name }}
		{{ list[0].val }}
		<List
			v-model="list"
			phName="input field name"
			phVal="input field val">
		</List>
	</div>
</template>

<script>

// import TypeSelector from './components/TypeSelector.vue';
// import Varchar from './components/inputs/varchar.vue';
import List from './components/inputs/list.vue';

export default {
	name: 'App',
	components: {
		// Varchar
		List
	},
	data: function() {
		return {
			list: [
				{
					name: 'test name',
					val: 'test val'
				},
				{
					name: 'second name',
					val: 'second val'
				}
			]
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