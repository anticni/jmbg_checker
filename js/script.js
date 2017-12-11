const jmbg = document.getElementById("jmbg"); 

function check(){

	var str = jmbg.value;
	var	dd = str.slice(0,2),
		mm = str.slice(2,4),
		yyy = str.slice(4,7),
		rr = str.slice(7,9),
		bbb = str.slice(9,12),
		k = str.slice(12,13);

console.log(dd);
console.log(mm);
console.log(yyy);
console.log(rr);
console.log(bbb);
console.log(k);

var day = "Dan rodjenja: " + dd +".";
var dayP = document.createElement("p");
dayP.textContent = day;
document.getElementById("data").appendChild(dayP);

var month = "Mesec rodjenja: " + mm +".";
var monthP = document.createElement("p");
monthP.textContent = month;
document.getElementById("data").appendChild(monthP);

var year = "Godina rodjenja: 1" + yyy +".";
var yearP = document.createElement("p");
yearP.textContent = year;
document.getElementById("data").appendChild(yearP);







}
