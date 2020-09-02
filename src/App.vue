<template>
	<div id="app">
		{{type}}
		{{ident}}
		<Modal v-if="rmItem" header="Modal header" resolve="Ok" reject="Huita" @resolve="rm()" @reject="rmItem=null">
			Вы действительно хотите удалить элемент {{rmItem.name}}
		</Modal>
		<TypeSelector :list="preferences.types" @change="chType($event)">Выбор типа:</TypeSelector>
		<IdentSelector
			v-if="type && !ident"
			:group="type"
			@add="chIdent('new')"
			@change="chIdent($event)"
			@rm="rmModal($event)"
		/>
		<Editor v-else-if="type && ident" :typeprod="type" :identprod="ident"/>
	</div>
</template>

<script>

import TypeSelector from './components/TypeSelector.vue';
import IdentSelector from './components/IdentSelector.vue';
import Editor from './components/Editor.vue';
import Modal from './components/Modal.vue';

import preferences from './preferences.js';

export default {
	name: 'App',
	components: {
		TypeSelector,
		IdentSelector,
		Editor,
		Modal
	},
	data: function() {
		return {
			type: null,
			ident: null,
			preferences: preferences,
			rmItem: null,
		}
	},
	methods: {
		chType: function(type) {
			this.type = type;
			this.ident = null;
		},
		chIdent: function(ident) {
			this.ident = ident;
		},
		rmModal: function(name, ident) {
			this.rmItem = {
				id: ident,
				name: name
			};
		},
		rm: function() {
			console.log(this.rmItem.name+' removed')
			this.rmItem = null;
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