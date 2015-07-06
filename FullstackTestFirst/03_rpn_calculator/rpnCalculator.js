function RPNCalculator() {
	this.stack = [];
}
RPNCalculator.prototype.push = function(num) {
	this.stack.push(num);
};
RPNCalculator.prototype.plus = function() {
	var arg2 = this.stack.pop();
	var arg1 = this.stack.pop();
	if (arg1 && arg2)
		this.stack.push(arg1 + arg2);
	else
		throw "rpnCalculator is empty";
};
RPNCalculator.prototype.minus = function() {
	var arg2 = this.stack.pop();
	var arg1 = this.stack.pop();
	if (arg1 && arg2)
		this.stack.push(arg1 - arg2);
	else
		throw "rpnCalculator is empty";
};
RPNCalculator.prototype.times = function() {
	var arg2 = this.stack.pop();
	var arg1 = this.stack.pop();
	if (arg1 && arg2)
		this.stack.push(arg1 * arg2);
	else
		throw "rpnCalculator is empty";
};
RPNCalculator.prototype.divide = function() {
	var arg2 = this.stack.pop();
	var arg1 = this.stack.pop();
	if (arg1 && arg2)
		this.stack.push(arg1 / arg2);
	else
		throw "rpnCalculator is empty";
};
RPNCalculator.prototype.value = function() {
	return this.stack[this.stack.length-1];
};