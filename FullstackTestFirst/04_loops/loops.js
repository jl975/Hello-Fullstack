function repeat(str, times) {
	var output = "";
	for (var i=0; i<times; i++) {
		output += str;
	}
	return output;
}

function sum(arr) {
	var sum = 0;
	for (var i=0; i<arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function gridGenerator(dim) {
	var grid = "";
	for (var i=0; i<dim; i++) {
		var row = "";
		for (var j=0; j<dim; j++) {
			if ((i+j)%2 == 0)
				row += '#';
			else
				row += ' ';
		}
		grid += row + "\n";
	}
	return grid;
}

function largestTriplet(num) {
	var triplet = [0, 0, 0];
	for (var a=1; a<num; a++) {
		for (var b=a; b<num; b++) {
			for (var c=b; c<=num; c++) {
				if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) &&
					b >= triplet[1] && c >= triplet[2]) {
					triplet = [a,b,c];
				}
			}
		}
	}
	return triplet;
}

function join(arr, delimiter) {
	var output = "";
	for (var i=0; i<arr.length; i++) {
		output += arr[i];
		if (delimiter && i<arr.length-1)
			output += delimiter;
	}
	return output;
}

function paramify(obj) {
	var elements = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key))
			elements.push(key + '=' + obj[key]); 
	}
	elements.sort(function(a,b) {
		if (a.toLowerCase() < b.toLowerCase())
			return -1;
		else return 1;
	});
	return join(elements, '&');
}




