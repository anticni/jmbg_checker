const jmbg = document.getElementById("jmbg"); 

function parseJMBG(){

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

if (yyy.startsWith("0")){
	var year = "Godina rodjenja: " + "2" + yyy;
}
else{
var year = "Godina rodjenja: " + "1" + yyy;
}
var yearP = document.createElement("p");
yearP.textContent = year;
document.getElementById("data").appendChild(yearP);

var date = new Date(Number(year), Number(month), Number(dd));
debugger;
var region = "Regija:" + rr

switch (Number(rr)){
case 01	: region =	 "stranci u BiH";  break;			
case 02	: region =	 "stranci u Crnoj Gori";  break;			
case 03	: region =	 "stranci u Hrvatskoj";  break;			
case 04	: region =	 "stranci u Makedoniji";  break;			
case 05	: region =	 "stranci u Sloveniji";  break;			
case 07	: region =	 "stranci u Srbiji (bez pokrajina)";  break;			
case 08	: region =	 "stranci u Vojvodini";  break;			
case 09	: region =	 "stranci na Kosovu";  break;			
case 10	: region =	 "Banja Luka";  break;			
case 11	: region =	 "Bihać";  break;			
case 12	: region =	 "Doboj";  break;			
case 13	: region =	 "Goražde";  break;			
case 14	: region =	 "Livno";  break;			
case 15	: region =	 "Mostar";  break;			
case 16	: region =	 "Prijedor";  break;			
case 17	: region =	 "Sarajevo";  break;			
case 18	: region =	 "Tuzla";  break;			
case 19	: region =	 "Zenica";  break;			
case 21	: region =	 "Podgorica";  break;			
case 26	: region =	 "Nikšić";  break;			
case 29	: region =	 "Pljevlja";  break;			
case 30	: region =	 "Osijek, Slavonija ";  break;			
case 31	: region =	 "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina ";  break;			
case 32	: region =	 "Varaždin, Međimurje ";  break;			
case 33	: region =	 "Zagreb";  break;			
case 34	: region =	 "Karlovac";  break;			
case 35	: region =	 "Gospić, Lika ";  break;			
case 36	: region =	 "Rijeka, Pula, Istra and Primorje s";  break;			
case 37	: region =	 "Sisak, Banovina ";  break;			
case 38	: region =	 "Split, Zadar, Dubrovnik, Dalmacija ";  break;			
case 39	: region =	 "mešano";  break;			
case 41	: region =	 "Bitola";  break;			
case 42	: region =	 "Kumanovo";  break;			
case 43	: region =	 "Ohrid";  break;			
case 44	: region =	 "Prilep";  break;			
case 45	: region =	 "Skopje";  break;			
case 46	: region =	 "Strumica";  break;			
case 47	: region =	 "Tetovo";  break;			
case 48	: region =	 "Veles";  break;			
case 49	: region =	 "Štip";  break;			
case 50	: region =	 "Slovenija";  break;			
case 71	: region =	 "Beograd  (Grad Beograd	 Stari Grad, Savski Venac, Voždovac, Vračar, Palilula, Zvezdara, Rakovica,Čukarica,NoviBeograd, Zemun, Mladenovac, Barajevo, Grocka, Obrenovac, Sopot, Lazarevac)";  break;		
case 72	: region =	 "Šumadija i Pomoravlje s (Šumadijski okrug	 Aranđelovac, Batočina, Knić, Kragujevac, Rača, Lapovo,Topola),(Pomoravski okrug	 Despotovac, Paraćin, Rekovac, Jagodina, Svilajnac, Ćuprija)";  break;	
case 73	: region =	 "Niš  (Nišavski okrug	 Aleksinac, Svrljig, Niš, Gadžin Han, Doljevac, Merošina, Ražanj), (Pirotskiokrug	Babušnica, Bela Palanka, Dimitrovgrad, Pirot), (Toplički okrug	 Blace, Žitorađa, Prokuplje, Kuršumlija)";  break;
case 74	: region =	 "Južna Morava  (Jablanički okrug	 Leskovac, Vlasotince, Medveđa, Lebane, Bojnik, Crna Trava), (Pčinjski okrug	 Vranje, Bujanovac, Surdulica, Bosilegrad, Preševo, Trgovište, Vladičin Han)";  break;	
case 75	: region =	 "Zaječar  (Zaječarski okrug	 Zaječar, Boljevac, Knjaževac, Sokobanja), (Borski okrug	 Bor, Majdanpek, Kladovo, Negotin)";  break;	
case 76	: region =	 "Podunavlje  (Podunavski okrug	 Smederevska Palanka, Velika Plana, Smederevo), (Braničevski okrug	VelikoGradište,Kučevo, Petrovac na Mlavi, Požarevac, Žagubica, Golubac, Žabari, Malo Crniće)";  break;	
case 77	: region =	 "Podrinje i Kolubara s (Mačvanski okrug	 Loznica, Krupanj, Ljubovija, Šabac, Bogatić, Koceljeva, Vladimirci,MaliZvornik), (Kolubarski okrug	 Valjevo, Lajkovac, Ljig, Ub, Osečina, Mionoca)";  break;	
case 78	: region =	 "Kraljevo  (Raški okrug	 Kraljevo, Vrnjačka Banja, Novi Pazar, Raška, Tutin), (Moravički okrug	 Gornji Milanovac,Čačak, Ivanjica, Lučani), (Rasinski okrug	 Aleksandrovac, Brus, Kruševac, Trstenik, Varvarin, Ćićevac)";  break;
case 79	: region =	 "Užice  (Zlatiborski okrug	 Arilje, Bajina Bašta, Kosjerić, Nova Varoš, Požega, Priboj, Prijepolje, Sjenica,Užice,Čajetina)";  break;		
case 80	: region =	 "Novi Sad  (Južnobački okrug	 Bač, Bačka Palanka, Bački Petrovac, Vrbas, Žabalj, Novi Sad, Srbobran, SremskiKarlovci, Temerin, Titel, Bečej, Beočin)";  break;		
case 81	: region =	 "Sombor  (Zapadnobački okrug	 Apatin, Kula, Odžaci, Sombor)";  break;		
case 82	: region =	 "Subotica  (Severnobački okrug	 Bačka Topola, Subotica, Mali Iđoš)";  break;		
case 85	: region =	 "Zrenjanin  (Srednjebanatski okrug	 Zrenjanin, Nova Crnja, Novi Bečej, Sečanj, Žitište)";  break;		
case 86	: region =	 "Pančevo  (Južnobanatski okrug	 Alibunar, Bela Crkva, Vršac, Kovačica, Kovin, Pančevo, Opovo, Plandište)";  break;		
case 87	: region =	 "Kikinda  (Severnobanatski okrug	 Ada, Kikinda, Kanjiža, Novi Kneževac, Senta, Čoka)";  break;		
case 88	: region =	 "Ruma  (Sremski okrug	 Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig)";  break;		
case 89	: region =	 "Sremska Mitrovica  (Sremski okrug	 Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig)";  break;		
case 91	: region =	 "Priština  (Kosovski okrug	 Priština, Obilić, Podujevo, Štrpce, Lipljan, Glogovac, Kačanik, KosovoPolje,Uroševac,Štimlje)";  break;		
case 92	: region =	 "Kosovska Mitrovica  (Kosovsko Mitrovački okrug	 Kosovska Mitrovica, Zvečan, Leposavić, Zubin Potok, Vučitrn, Srbica)";  break;		
case 93	: region =	 "Peć  (Pećki okrug	 Peć, Istok, Klina)";  break;		
case 94	: region =	 "Đakovica  (Pećki okrug	 Dečani, Đakovica)";  break;		
case 95	: region =	 "Prizren  (Prizrenski okrug	 Gora-Dragaš, Orahovac, Prizren, Suva Reka)";  break;		
case 96	: region =	 "Kosovsko Pomoravski okrug	 (Gnjilane, Kosovska Kamenica, Vitina, Novo Brdo)";  break;		
}
var regionP = document.createElement("p");
regionP.textContent = "regija: " + region;
document.getElementById("data").appendChild(regionP);

if (Number(bbb)<500){
	var sex = "Pol: Muski"
}
else{
	var sex = "pol: Zenski"
}
var sexP = document.createElement("p");
sexP.textContent = sex;
document.getElementById("data").appendChild(sexP);


}

function check(){
		document.getElementById("data").innerHTML = "";
		let control = document.getElementById("jmbg").value.split("");

//check JMBG length
		if(jmbg.value.length === 13){
//check control number
			ControlNr = 11 - (7 * (Number(control[0]) + Number(control[6])) + 6 * (Number(control[1]) + Number(control[7])) + 5 * (Number(control[2]) + Number(control[8])) + 4 * (Number(control[3]) + Number(control[9])) + 3 * (Number(control[4]) + Number(control[10])) + 2 * (Number(control[5]) + Number(control[11]))) % 11;
			if (ControlNr > 9) ControlNr = 0;
		if (Number(control[12]) == ControlNr){
			parseJMBG();
		}
		else{
			console.log("nije ispravan kontrolni");
		}
	}
	else{
		console.log("nema 13 brojeva")
	}

}

// VALIDATES DATE, NOT NEEDED

// function check(){
// 	var str = jmbg.value;
// 	var	dd = Number(str.slice(0,2)),
// 		mm = Number(str.slice(2,4)),
// 		yyy = Number(str.slice(4,7)),
// 		rr = Number(str.slice(7,9)),
// 		bbb = Number(str.slice(9,12)),
// 		k = Number(str.slice(12,13));

// 	if (mm>12){
// 		console.log("month not good");
// 		return;
// 	}
// 	var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
  
//   if (mm==1 || mm>2){  
//   if (dd>ListofDays[mm-1]){  
//   alert('Invalid date format!');  
//   return false;  
//   }  
//   }  
//   if (mm==2){  
//   var lyear = false;  
//   if ( (!(yyy % 4) && yyy % 100) || !(yyy % 400)){  
//   lyear = true;  
//   }  
//   if ((lyear==false) && (dd>=29)){  
//   alert('Invalid date format!');  
//   return false;
//   }  
//   if ((lyear==true) && (dd>29)){  
//   alert('Invalid date format!');  
//   return false;  
//   }  
    
//   }  
//   else  
//   {  
//   alert("VALID!");  

//   return false;  
//   }  
// }