
function iterate(array, currentOutput, taskFunc) {
	var updatedOutput = taskFunc(currentOutput, array[0]);
	var remainingArr = array.slice(1);
	if (remainingArr.length > 0)
		return iterate(remainingArr, updatedOutput, taskFunc);
	else return updatedOutput;
}

function doubler(num) {
	return num*2;
}

function map(array, mapFunc) {
	return iterate(array, [], function(mapResult, element) {
		var output = mapResult;
		output.push(mapFunc(element));
		return output;
	});
}

function filter(array, filterFunc) {
	return iterate(array, [], function(filterResult, element) {
		var output = filterResult;
		if (filterFunc(element))
			filterResult.push(element);
		return output;
	});
}

// is it possible to make this work with object properties using a functional approach?
function contains(collection, value) {
	var result = false;
	for (var key in collection) {
		if (collection[key] == value)
			result = true;
	}
	return result;
}

function reduce(array, startVal, reduceFunc) {
	return iterate(array, startVal, function(reduceResult, element) {
		return reduceFunc(reduceResult, element);
	});
}


function countWords(str) {
	return str.split(' ').length;
}

function countWordsInReduce(numWords, str) {
	return numWords + countWords(str);
}

function sum(array) {
	return reduce(array, 0, function(a,b) {return a+b;});
}

function every(array, testFunc) {
	return iterate(array, true, function(status, element) {
		if (array.length==0 || status && testFunc(element))
			return true;
		else return false;
	});
}

function any(array, testFunc) {
	return iterate(array, false, function(status, element) {
		if (array.length==0 || !status && !testFunc(element))
			return false;
		else return true;
	});
}








