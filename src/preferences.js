export default {
	prod: {
		game: {
			name: {
				component: 'Varchar',
				label: 'Test label',
				attrs: {
					placeholderVal: "input yout text"
				}
			},
			logo: {
				component: 'ImageLoader',
				label: 'Test label',
				attrs: {
					count: 1
				}
			},
			screen: {
				component: 'ImageLoader',
				label: 'Test label',
				opt: {
					count: 3
				}
			},
			radField: {
				component: 'Radio',
				label: 'Test label',
				attrs: {
					list: {
						first: 'firstName',
						second: 'secondName'
					}
				}
			},
			checkField: {
				component: 'Checkbox',
				label: 'Test label',
				attrs: {
					list: [
						{
							name: 'firstName',
							val: 'first'
						},
						{
							name: 'secondName',
							val: 'second'
						}
					]
				}
			},
			list: {
				component: 'List',
				label: 'Test label',
				attrs: {
					phName:"input field name",
					phVal: "input field val"
				}
			}
		}
	},
	types: {
		game: 'Игры',
		pack: 'Паки',
		cheat: 'Спец. предложения'
	},
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