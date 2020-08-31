<template>
	<div>
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
	</div>
</template>

<script>

import Varchar from './inputs/varchar.vue';
import List from './inputs/list.vue';
import Radio from  './inputs/radio.vue';
import Checkbox from './inputs/checkbox.vue';
import ImageLoader from './inputs/imageLoader.vue';
import Arr from './inputs/arr.vue';

import preferences from '../preferences.js';

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
	data: function() {
		return {
			preferences: preferences
		}
	},
	props: ['prod']
}
</script>