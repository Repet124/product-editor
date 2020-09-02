// import preferences from './preferences.js';

const methods = {

	ImageLoader: value => {
		if (value === '') return [];
		return value.map(item => ({
			url: item,
			file: false
		}))
	}
}

export function handlerOfComponent(componentName, serverAnswer) {
	if (methods[componentName]) {
		return methods[componentName](serverAnswer);
	}
	return serverAnswer;
}