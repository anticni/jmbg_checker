const jmbg = document.getElementById("jmbg"); 

function check(){

	var str = jmbg.value;
	var	dd = str.slice(0,2),
		mm = str.slice(2,4),
		yyy = str.slice(4,7),
		rr = str.slice(7,9),
		bbb = str.slice(9,11),
		k = str.slice(11,13);

console.log(dd);
console.log(mm);
console.log(yyy);
console.log(rr);
console.log(bbb);
console.log(k);


}
