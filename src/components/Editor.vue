<template>
	<div v-if="prod">
		<Varchar name="test" placeholderVal="input yout text">
			Test label:
		</Varchar>
		<List v-model="prod.list" phName="input field name" phVal="input field val">
			Test label:
		</List>
		<Radio v-model="prod.selectItem" :list="preferences.radio">
			Test label:
		</Radio>
		<Checkbox v-model="prod.arr" :list="preferences.checkbox">
			Test label:
		</Checkbox>
		<ImageLoader v-model="prod.files" count="3">
			Test label:
		</ImageLoader>
		<Arr v-model="prod.arr" placeholder="input">
			Test label:
		</Arr>
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
			prodRequest: new Request('prod', answer => {this.prod = answer})
		}
	},
	mounted: function() {
		this.prod = null;
		this.prodRequest.data = {};
		this.prodRequest.send();
	}
}
</script>