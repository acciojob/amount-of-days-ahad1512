function daysOfAYear(y) {
	if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
		return 366;
	}
	else{

		return 365
	}
}
let year=prompt("enter year");
alert(daysOfAYear(year));