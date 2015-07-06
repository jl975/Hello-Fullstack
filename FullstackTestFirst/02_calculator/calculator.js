function createCalculator() {
	var calculator = {
		number: 0
	};
	calculator.value = function() {
		return calculator.number;
	}
	calculator.add = function(num) {
		calculator.number += num;
	}
	calculator.subtract = function(num) {
		calculator.number -= num;
	}
	return calculator;
}