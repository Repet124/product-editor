import preferences from './preferences.js';

function getFormData(data) {
	let formData = new FormData();
	for(let key in data) {
		formData.set(key, data[key])
	}
	return formData;
}

function prepareGet(obj) { // подготовка get запроса
	// принмает объект запроса
	let get = '';
	for(let key in obj) {
		if (get!=='') {get+='&'}
		get +=key+'='+obj[key]
	}
	return get; // возвращает строку get начиная с "?"
}

// export default function requestToServer(type, to, requestData, resolve) {
// 	const fetchData = getFetchData(requestData);
// 	if (method === 'get') {
// 		fetch(to+'?'+prepareGet(requestData))
// 			.then(json => json.json())
// 			.then(resolve)
// 			return;
// 	}
// 	fetch(to, {
// 		method: method,
// 		headers: fetchData.headers,
// 		body: fetchData.body
// 	})
// 		.then(answer => answer.json())
// 		.then(result => {
// 			setTimeout(() => {
// 				resolve(result);
// 			}, 1000)
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
// }

const optionsOfType = new Map(
	[
		['json', {
			headers: {'Content-Type': 'application/json;charset=utf-8'},
			body: JSON.stringify
		}],
		['FormData', {
			headers: {'Content-Type': 'form/multipart;charset=utf-8'},
			body: getFormData
		}]
	]
);

export default class Request {
	constructor(type, callback=()=>{console.log('Sended')}) {
		this._url = preferences.request[type].url;
		this._data = {};
		this._callback = callback;
		this.method = preferences.request[type].method;
		this.marker = preferences.request[type].marker;

		let options;
		if (this.method !== 'get') {
			options = optionsOfType.get(preferences.request[type].type);
		} else {
			options = {
				headers: {"Content-Type": "text/plain;charset=UTF-8"}
			}
		}

		this.headers = options.headers;
		this.getBody = options.body;
	}

	set data(d) {
		this._data = d;
	}

	set callback(f) {
		this._callback = f;
	}

	send(callback=false) {
		if (!callback) {callback = this._callback}
		data = {...data, ...this.marker}
		
		fetch(this.url, {
			method: this.method,
			headers: this.headers,
			// body: this.getBody(data)
		})
			.then(answer => answer.json())
			.then(result => {
				setTimeout(()=>{

					callback(result)
				}, 1000);
			})
			.catch(err => new Error(err))
	}
}