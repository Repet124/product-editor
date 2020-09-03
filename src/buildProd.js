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
	ImageLoader: value => {
		return value.map(item => {
			if (item.file) {
				return {
					url: item.url,
					file: file.name
				}
			}
			return {
				url: item.url
			}
		})
	}
}

export function prepareProd(type, prodData) {
	if (methods[componentName]) {
		return methods[componentName](prodData);
	}
	return prodData;
}

export function parseProd(type, prodData) {
	let newProd = {},
		componentName;
	for(let name in prodData) {

		componentName = preferences.prod[type][name].component;

		if (parseMehods[componentName]) {
			newProd[name] = parseMehods[componentName](prodData);
			continue;
		}

		newProd[name] = prodData[name];
	}

	return newProd;
}