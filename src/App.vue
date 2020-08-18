<template>
	<div id="app">
		<!-- <TypeSelector :txt="test"/> -->
		<Varchar name="Test">
			Some label
		</Varchar>
	</div>
</template>

<script>

// import TypeSelector from './components/TypeSelector.vue';
import Varchar from './components/inputs/varchar.vue';

export default {
	name: 'App',
	components: {
		Varchar
	}
}
</script>
