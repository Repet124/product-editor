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
import { handlerOfComponent } from '../buildProd.js';

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
			prodRequest: new Request('prod', this.prodBuild)
		}
	},
	methods: {
		prodBuild: function(prodData) {
			let newProd = {};

			for(let name in prodData) {
				newProd[name] = handlerOfComponent(this.preferences.prod[this.typeprod][name].component, prodData[name])
			}

			this.prod = newProd;
		}
	},
	mounted: function() {
		this.prod = null;

		if (this.identprod === 'new') {
			let emptyProd = {};
			for(let name in preferences.prod[this.typeprod]) {
				emptyProd[name] = '';
			}
			this.prodBuild(emptyProd);
			return;
		}

		this.prodRequest.data = {};
		this.prodRequest.send();
	}
}
</script>