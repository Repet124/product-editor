import preferences from './preferences.js';

const methods = {
	Varchar: value => value,

	Arr: value => JSON.parse(value),

	List: value => JSON.parse(value),

	Radion: value => value,

	Checkbox: value => JSON.parse(value),

	ImageLoader: value => JSON.parse(value).map(item => ({
		url: item,
		file: false
	}))
}

export function getHandlerOfComponent(componentName) {
	return methods[componentName];
}