function createCalculator() {
	var calculator = {
		number: 0
	};
	calculator.value = function() {
		return this.number;
	}
	calculator.add = function(num) {
		this.number += num;
	}
	calculator.subtract = function(num) {
		this.number -= num;
	}
	return calculator;
}