const methods = {
	parseImageLoader: (value) => {
		if (value === '') return [];
		return value.map(item => ({
			url: item,
			file: false
		}))
	},

	prepareImageLoader: (field, value) => {
		let data = [], files = [], result = {};
		value.forEach(item => {
			if (item.file) {
				data.push({
					url: item.url,
					file: item.file.name
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

function handlerProdOfAction(action, prodPreferences, prodData) {
	let prod = {}, handler;

	for(let name in prodData) {

		handler = methods[action+prodPreferences[name].component];

		if (handler) {
			switch(action) {
				case 'parse':
					prod[name] = handler(prodData[name]);
					break;
				case 'prepare':
					prod = {...prod, ...handler(name, prodData[name])};
			}
			continue;
		}

		prod[name] = prodData[name];
	}

	return prod;
}

export const prepare = handlerProdOfAction.bind(null, 'prepare');
export const parse = handlerProdOfAction.bind(null, 'parse');