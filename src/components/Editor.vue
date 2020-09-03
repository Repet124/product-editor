<template>
	<div v-if="prod">
		<component 
			v-for="(val, name) in prod"
			:is="preferences.prod[typeprod][name].component"
			:key="name"
			v-model="prod[name]"
			v-bind="preferences.prod[typeprod][name].attrs"
		>
			{{preferences.prod[typeprod][name].label}}
		</component>
		<button class="btn">Save</button>
	</div>
	<strong v-else>Loading...</strong>
</template>

<script>

import Varchar from './inputs/varchar.vue';
import List from './inputs/list.vue';
import Radio from  './inputs/radio.vue';
import Checkbox from './inputs/checkbox.vue';
import ImageLoader from './inputs/imageLoader.vue';
import Arr from './inputs/arr.vue';

import preferences from '../preferences.js';
import Request from '../request.js';
import {success as modal} from '../modal.js';
import { prepare, parse } from '../handlerProd.js';

const modals = {
	success: {
		add: {
			message: 'Товар успешно добавлен',
			resolve: 'Ok'
		},
		ch: {
			message: 'Товар успешно изменён'
		}
	}
}

export default {
	name: 'Editor',
	components: {
		Varchar,
		Arr,
		List,
		Radio,
		Checkbox,
		ImageLoader
	},
	props: ['typeprod', 'identprod'],
	data: function() {
		return {
			preferences: preferences,
			prod: null,
			modal: false,
			prodRequest: new Request('prod', this.build),
		}
	},
	methods: {
		build: function(prodData) {
			this.prod = prepare, parse(prodData);
		},
		send: function() {
			let edit = new Request('add', ()=>{this.modal = modal.add})
		}
	},
	mounted: function() {
		this.prod = null;

		if (this.identprod === 'new') {
			let emptyProd = {};
			for(let name in preferences.prod[this.typeprod]) {
				emptyProd[name] = '';
			}
			this.build(emptyProd);
			return;
		}

		this.prodRequest.data = {};
		this.prodRequest.send();
	}
}
</script>