<template>
	<div id="app">
		{{type}}
		{{ident}}
		<Modal v-if="modal" :header="modal.header" :resolve="modal.resolve" :reject="modal.reject" @resolve="modal.resolveHandler" @reject="modal.rejectHandler">
			{{modal.message}}
		</Modal>
		<TypeSelector :list="preferences.types" @change="chType($event)">Выбор типа:</TypeSelector>
		<IdentSelector
			v-if="type && !ident"
			ref="identSelector"
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

import Request from './request.js';
import {info as modalInfo, success as modalSuccess} from './modal.js';
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
			modal: null
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
			this.modal = {...modalInfo.rm};
			this.modal.message += ' ' + name + '?';
			this.modal.resolve = 'Да';
			this.modal.reject = 'Нет';
			this.modal.resolveHandler = this.rm;
			this.modal.rejectHandler = () => {this.modal=null;this.rmItem=null}
		},
		rm: function() {
			this.modal = null;
			let rmRequest = new Request('rm', () => {
				this.rmItem = null;
				this.modal = {...modalSuccess.rm};
				this.modal.rejectHandler = this.modal.resolveHandler = () => {
					this.modal = null;
					this.$refs.identSelector.getIdents();
				}
			})
			rmRequest.data = {};
			rmRequest.send();
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