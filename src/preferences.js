export default {
	prod: {
		name: {
			component: 'Varchar'
		},
		logo: {
			component: 'ImageLoader',
			opt: {
				count: 1
			}
		},
		radField: {
			component: 'Radio',
			opt: {
				fields: {
					first: 'firstName',
					second: 'secondName'
				}
			}
		}
	},
	types: {
		game: 'Игры',
		pack: 'Паки',
		cheat: 'Спец. предложения'
	},
	// radio: {
	// 	first: 'firstName',
	// 	second: 'secondName'
	// },
	// checkbox: [
	// 	{
	// 		name: 'firstName',
	// 		val: 'first'
	// 	},
	// 	{
	// 		name: 'secondName',
	// 		val: 'second'
	// 	}
	// ],
	request: {
		list: {
			type: 'json',
			method: 'get',
			url: '/list.json',
			marker: {}
		},
		prod: {
			type: 'json',
			method: 'get',
			url: '/prod.json',
			marker: {}
		},
		add: {
			type: 'FormData',
			method: 'post',
			url: '/func.js',
			marker: {}
		},
		ch: {
			type: 'FormData',
			method: 'post',
			url: '/func.js',
			marker: {}
		},
		rm: {
			type: 'json',
			method: 'get',
			url: '/func.js',
			marker: {}
		}
	}
}