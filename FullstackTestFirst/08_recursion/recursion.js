
function factorialIterative(num) {
	var result = 1;
	for (var i=num; i>0; i--) {
		result *= i;
	}
	return result;
}

function factorial(num) {
	if (num == 0)
		return 1;
	else
		return num * factorial(num-1);
}

function fib(num) {
	if (num == 0)
		return 1;
	else if (num == 1)
		return 1;
	else return fib(num-2) + fib(num-1);
}

function type(input) {
	var tostring = Object.prototype.toString.call(input);
	return tostring.slice(8, tostring.length-1);
}

function stringify(input) {
	if (type(input)=='String')
		return '"'+input+'"';
	else if (!(type(input)=='Array' || type(input)=='Object'))
		return String(input);
	else if (type(input)=='Array') {
		var a = [];
		for (var i=0; i<input.length; i++) {
			a.push(stringify(input[i]));
		}
		return '[' + a.join(',') + ']';
	}
	else if (type(input)=='Object') {
		var o = [];
		for (var prop in input) {
			var keyValue = '"'+prop+'"' + ': ' + stringify(input[prop]);
			o.push(keyValue);
		}
		return '{' + o.join(',') + '}';
	}
}

var und = undefined,
  nll = null,
  bool = true,
  num = 123,
  str = "abc",
  fnc = function() {},
  arr = [],
  obj = {};

var result = stringify({
  a: {
    '5': true,
    c: [null, {
      d: 1
    }],
    e: {
      f: "abc"
    }
  },
  g: undefined
});
console.log(result);