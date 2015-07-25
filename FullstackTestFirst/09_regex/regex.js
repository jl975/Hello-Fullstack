
function findACount(str) {
	var regExp = /a/gi;
	var occurrencesofA = 0;
	while (regExp.exec(str))
		occurrencesofA++;
	return occurrencesofA;
}

function areaCodeFinder(phoneNumber) {
	var regExp = /\(?(\d{3})\)?-?\d{3}-?\d{4}/;
	return Number(regExp.exec(phoneNumber)[1]);
}

function adjustUrlParameter(url, param) {
	var urlRegex = /(?:http:\/\/)?www\.(?:\w+\.)+[a-z]+(?:\?([A-Z]+)=(\d+))?/;
	var match = urlRegex.exec(url);
	var matchURL = match[0];
	var matchParam = match[1];	// the type of parameter already in the URL, if applicable
	var matchValue = match[2];		// the value of the parameter already in the URL
	
	if (!matchParam)
		return matchURL + '?' + param;
	else if (matchParam == 'ID') {
		var paramRegex = /([A-Z]+)=(\d+)/;
		var paramMatch = paramRegex.exec(param);
		var paramType = paramMatch[1];
		var paramValue = paramMatch[2];
		if (paramType == 'ID')
			return matchURL.replace("ID="+matchValue, "ID="+paramValue);
		else if (paramType == 'TYPE')
			return matchURL + '&' + param;
	}
}

function stringPlusPlus(str) {
	var regExp = /.*?(0+)?(\d+)$/;
	var match = regExp.exec(str);
	if (!match)
		return str + '1';
	var matchStr = match[0];
	var leadingZeros = match[1] || '';	
	var num = match[2];					
	var actualNum = Number(num);

	if (String(actualNum+1).length == num.length) {
		return matchStr.replace(/\d+$/, leadingZeros+String(actualNum+1));
	}
	else {	// this case only applies when the number's digits are all 9's
		return matchStr.replace(/\d+$/, leadingZeros.slice(0,leadingZeros.length-1)+String(actualNum+1));
	}
}

