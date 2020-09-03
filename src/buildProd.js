import preferences from './preferences.js';

const parseMethods = {

	ImageLoader: (name, value) => {
		if (value === '') return [];
		return value.map(item => ({
			url: item,
			file: false
		}))
	}
}

const prepareMethods = {
	ImageLoader: (field, value) => {
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
}

export function prepareProd(type, prodData) {
	let prod = {},
		componentName;
	for(let name in prodData) {

		componentName = preferences.prod[type][name].component;

		if (parseMehods[componentName]) {
			prod[name] = parseMehods[componentName](prodData);
			prod = {...prod, ...parseMehods[componentName](name, prodData)};
			continue;
		}

		prod[name] = prodData[name];
	}
	return prodData;
}

export function parseProd(type, prodData, action) {
	let prod = {},
		componentName;
	for(let name in prodData) {

		componentName = preferences.prod[type][name].component;

		if (parseMehods[componentName]) {
			prod[name] = parseMehods[componentName](prodData);
			continue;
		}

		prod[name] = prodData[name];
	}

	return prod;
}