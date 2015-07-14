// Functions.js

// can take any number of string arguments
function concat_string() {
	var pieces = Array.prototype.slice.call(arguments);
	var output = pieces.join('');
	return output;
}

// can take any number of function arguments
function yourFunctionRunner() {
	var returnValues = [];
	for (var i=0; i<arguments.length; i++) {
		returnValues.push(arguments[i]());
	}
	return returnValues.join('');
}

function makeAdder(A) {
	return function(num) {return num+A};
}

function once(fn) {
	var calledOnce = false;
	return function() {
		if (!calledOnce) {
			calledOnce = true;
			return fn();
		}
	};
}

function createObjectWithTwoClosures() {
	var closedValue = 0;
	var obj = {
		'oneIncrementer': function(){closedValue++},
		'tensIncrementer': function(){closedValue+=10},
		'getValue': function(){return closedValue},
	};
	return obj;
}





