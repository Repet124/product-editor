import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
const preferences = JSON.parse(document.getElementById('product-editor').innerHTML);

new Vue({
	render: h => h(App, {
		props: {
			preferences: preferences
		}
	})
}).$mount('#product-editor')
