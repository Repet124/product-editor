<template>
	<div class="identSelector_container">
		<button class="btn" @click="$emit('add')">New prod</button>
		<strong v-if="!idents">Loading...</strong>
		<ul v-else>
			<li v-for="item in idents" :key="item.ident">
				<span @click="$emit('change', item.ident)">{{ item.name }}</span>
				<button class="rm" @click="$emit('rm', item.name, item.ident)">X</button>
			</li>
		</ul>
	</div>
</template>

<script>

import Request from '../request.js';

export default {
	name: 'IdentSelector',
	props: ['group'],
	inject: ['preferences'],
	data: function() {
		return {
			idents: null,
			listRequest: new Request(this.preferences.request.list, answer => {this.idents = answer[this.group]})
		}
	},
	methods: {
		getIdents: function() {
			this.idents = null;

			this.listRequest.data = {};
			this.listRequest.send()
		}
	},
	watch: {
		group: function() {this.getIdents()}
	},
	created: function() {this.getIdents()},
}

</script>

<style>
	.btn.typeSelector_btn {
		margin-top: 0;
		width: 20%;
	}
	.typeSelector_btn + .typeSelector_btn {
		margin-left:  10px;
	}
</style>