import {Ajax} from './ajax.js';

export default class Request {
	constructor(preferences, callback=()=>{console.log('Sended')}) {
		this._url = preferences.url;
		this._data = {};
		this._callback = callback;
		this._method = preferences.method;
		this._marker = preferences.marker;
	}

	set data(d) {
		this._data = d;
	}

	set callback(f) {
		this._callback = f;
	}

	send(callback=false) {
		if (!callback) {callback = this._callback}
		Ajax(this._method, this._url, {
			...this._data,
			...this._marker}, result => {
				setTimeout(()=>{
					callback(JSON.parse(result))
				}, 1000);
			})
	}
}