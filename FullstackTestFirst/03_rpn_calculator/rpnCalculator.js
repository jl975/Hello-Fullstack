function RPNCalculator() {
	this.stack = [];
}
RPNCalculator.prototype.push = function(num) {
	this.stack.push(num);
};
RPNCalculator.prototype.evaluate = function(operation) {
	var arg2 = this.stack.pop();
	var arg1 = this.stack.pop();
	if (arg1 && arg2) {
		this.push(operation(arg1, arg2));
	}
	else throw "rpnCalculator is empty";
}

RPNCalculator.prototype.plus = function() {
	this.evaluate(function(arg1, arg2) {
		return arg1 + arg2;
	});
};
RPNCalculator.prototype.minus = function() {
	this.evaluate(function(arg1, arg2) {
		return arg1 - arg2;
	});
};
RPNCalculator.prototype.times = function() {
	this.evaluate(function(arg1, arg2) {
		return arg1 * arg2;
	});
};
RPNCalculator.prototype.divide = function() {
	this.evaluate(function(arg1, arg2) {
		return arg1 / arg2;
	});
};
RPNCalculator.prototype.value = function() {
	return this.stack[this.stack.length-1];
};