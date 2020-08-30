<template>
	<div class="identSelector_container">
		<strong v-if="!idents">Loading...</strong>
		<ul v-else>
			<li v-for="item in idents" :key="item.ident" @click="$emit('change', item.ident)">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'IdentSelector',
	props: ['group'],
	data: function() {
		return {
			idents: null
		}
	},
	methods: {
		getIdents: function() {
			this.idents = null;
			fetch('/list.json')
				.then(answer => answer.json())
				.then(result => {
					setTimeout(() => {
						this.$nextTick(function () {
							this.idents = result[this.group];
						})
					}, 1000)
				})
		}
	},
	watch: {
		group: function() {
			this.getIdents()
		}
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