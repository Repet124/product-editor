export default {
	types: {
		game: 'Игры',
		pack: 'Паки',
		cheat: 'Спец. предложения'
	},
	radio: {
		first: 'firstName',
		second: 'secondName'
	},
	checkbox: [
		{
			name: 'firstName',
			val: 'first'
		},
		{
			name: 'secondName',
			val: 'second'
		}
	],
	request: {
		list: {
			type: 'json',
			method: 'get',
			url: '/list.js'
		},
		prod: {
			type: 'json',
			method: 'get',
			url: '/prod.js'
		},
		add: {
			type: 'FormData',
			method: 'post',
			url: '/func.js'
		},
		ch: {
			type: 'FormData',
			method: 'post',
			url: '/func.js'
		},
		rm: {
			type: 'json',
			method: 'get',
			url: '/func.js'
		}
	}
}