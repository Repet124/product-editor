import preferences from './preferences.js';


const method = preferences.request.method,
	typeRequest = preferences.request.type,
	marker = preferences.request.marker;

function getFetchData(data) {
	data = {...data, ...marker};
	console.log(data)
	switch(typeRequest) {
		case 'json':
			return {
				headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify(data)
			}
		case 'FormData':
			return {
				headers: {'Content-Type': 'form/multipart;charset=utf-8'},
				body: getFormData(data)
			}
		default:
			throw new Error('Invalid data type');
	}
}

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

export default function requestToServer(type, to, requestData, resolve) {
	const fetchData = getFetchData(requestData);
	if (method === 'get') {
		fetch(to+'?'+prepareGet(requestData))
			.then(json => json.json())
			.then(resolve)
			return;
	}
	fetch(to, {
		method: method,
		headers: fetchData.headers,
		body: fetchData.body
	})
		.then(test => test.text())
		.then(ans => {
			console.log(ans)
		})
		.then(answer => answer.json())
		.then(result => {
			setTimeout(() => {
				resolve(result);
			}, 1000)
		})
		.catch(err => {
			console.log(err)
		})
}

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

class Request = {
	constructor(type, callbak) {
		this.method = preferences.request[type].method;
		this.marker = preferences.request[type].marker;
		this.callbak = callbak;

		const options = optionsOfType.get(preferences.request[type].type);

		this.headers = options.headers;
		this.getBody = options.body;
	}
}