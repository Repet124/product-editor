export function Ajax(method, page, requestObj, callback) { // запрос
	// принимает метод отправки (get, post) страницу получатель, объект запроса, обработчик ответа

	function CreateRequest() { // создание объекта XMLHttpRequest
		let req = false;
		if (window.XMLHttpRequest) req = new XMLHttpRequest;
		// else if (window.ActivXObject) try {
		// 	req = new ActivXObject("Microsoft.XMLHTTP")
		// } catch (b) {
		// 	req = new ActivXObject("Msxml2.XMLHTTP")
		// }
		req || alert("\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c XMLHttpRequest");
		return req;
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

	function preparePost(obj) {
		let post = '';
		for(let key in obj) {
			if (post !== '') {post += '&';}
			post += key+'='+encodeURIComponent(obj[key]);
		}
		return post;
	}

	function answerEvent(xhr, callback) { // обработка события ответа сервера
		// принимает объект запроса, обработчик ответа
		if (!callback) return;
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				callback(xhr.responseText);
			}
		};
	}

	let Request = CreateRequest(),
		isFormData = requestObj instanceof FormData,
		url,
		getDelimiter,
		data;
	if (!isFormData) {
		switch(method) { // подготовка запроса в соответсвии к методу
			case 'get':
				getDelimiter = /\?/.test(page) ? '&' : '?'; // test having GET-params
				url = page+getDelimiter+prepareGet(requestObj);
				data = null;
				break;
			case 'post':
				url = page;
				data = preparePost(requestObj);
				break;
		}
	} else {
		url = page;
		data = requestObj;
	}

	answerEvent(Request, callback); // обработка ответа

	Request.open(method, url, true)
	if(!isFormData && method === 'post') {
		Request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	}
	Request.send(data);
}