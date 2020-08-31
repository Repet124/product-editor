<template>
	<div id="app">
		{{type}}
		{{ident}}
		{{!!prod}}
		<TypeSelector :list="preferences.types" @change="chType($event)">Выбор типа:</TypeSelector>
		<IdentSelector v-if="type && !ident" :group="type" @change="chIdent($event)"></IdentSelector>
		<Editor v-else-if="prod" :prod="prod"></Editor>
		<strong v-else-if="ident">Loading...</strong>
	</div>
</template>

<script>

import TypeSelector from './components/TypeSelector.vue';
import IdentSelector from './components/IdentSelector.vue';
import Editor from './components/Editor.vue';

import preferences from './preferences.js';
import Request from './request.js';

export default {
	name: 'App',
	components: {
		TypeSelector,
		IdentSelector,
		Editor
	},
	data: function() {
		return {
			type: null,
			ident: null,
			prod: null,
			preferences: preferences,
			prodRequest: new Request('prod', answer => {this.prod = answer})
		}
	},
	methods: {
		chType: function(type) {
			this.type = type;
			this.ident = null;
			this.prod = null;
		},
		chIdent: function(ident) {
			this.ident = ident;

			this.prodRequest.data = {};
			this.prodRequest.send();
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
		padding: 10px;
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