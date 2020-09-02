<template>
	<div v-if="prod">
		<component 
			v-for="(val, name) in prod"
			:is="preferences.prod[name].component"
			:key="name"
			v-model="prod[name]"
			v-bind="preferences.prod[name].attrs"
		>
			{{preferences.prod[name].label}}
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
		prodBuild: function(serverAnswer) {
			let newProd = {};

			for(let name in serverAnswer) {
				newProd[name] = handlerOfComponent(this.preferences.prod[name].component, serverAnswer[name])
			}

			this.prod = newProd;
		}
	},
	mounted: function() {
		this.prod = null;
		this.prodRequest.data = {};
		this.prodRequest.send();
	}
}
</script>