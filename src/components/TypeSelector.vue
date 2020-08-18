<template>
	<ul>
		<li v-for="(value, name) in list" :key="name">{{ value }}</li>
	</ul>
</template>

<script>

import preferences from '../preferences.js';

export default {
	name: 'TypeSelector',
	data: function() {
		return {
			list: preferences.types
		}
	}
}

</script>