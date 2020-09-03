import preferences from './preferences.js';

function parseImageLoader(value) {
	if (value === '') return [];
	return value.map(item => ({
		url: item,
		file: false
	}))
}


function prepareImageLoader(field, value) {
	let data = [], files = [], result = {};
	value.forEach(item => {
		if (item.file) {
			data.push({
				url: item.url,
				file: file.name
			});
			files.push(item.file);
			return;
		}
		data.push({
			url: item.url
		});
	})
	result[field] = data;
	result[field+'-files'] = files;

	return result;
}

function handlerProdOfAction(action, type, prodData) {
	let prod = {}, handler;

	for(let name in prodData) {

		handler = window[action+preferences.prod[type][name].component];

		if (handler) {
			switch(action) {
				case 'parse':
					prod[name] = handler(prodData);
					break;
				case 'prepare':
					prod = {...prod, ...handler(name, prodData)};
			}
			continue;
		}

		prod[name] = prodData[name];
	}

	return prod;
}

export const prepare = handlerProdOfAction.bind(null, 'prepare');
export const parse = handlerProdOfAction.bind(null, 'parse');