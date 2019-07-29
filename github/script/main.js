"use strict";

var a = +prompt('Введите  число', 18)
var b = +prompt('Введите степень', 18)

function pow (a,b) {

	for (var i = 1; i < b; i++) {

		a = a * a;
	}

	return a;
}

if ( b <= 1) {
	alert('Степень ' + b + 'не поддерживается, введите целую степень больше 1');
}
	else {
		alert(pow(a,b));
	}




