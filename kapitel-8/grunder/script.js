// // var dag = "fredag";
// // alert(dag);
// // console.log("Idag är det " + fredag)

// var stad = prompt("var är du född?");
// console.log("du" + stad)

// var gissning = prompt("vad e det");
// if (gissning == 86) {
//     alert("wow")
// } else {
//     alert("dum")
// }

// var stal1 = Math.round(Math.random() * 100);
// var stal2 = Math.round(Math.random() * 100);
// var facit = stal1 + stal2;


// var giss = prompt("vad e " + stal1 +"+"+ stal2 +"?");
// if (giss == facit) {
//     document.writeln("<h1>Du är en människa!</h1>");
// } else {
//     document.writeln("<h1>fuck you</h1>");
// }
// document.writeln("<h1>Slump1 = "+stal1+"</h1>");

// var tal1 = promt("tal1");
// var tal2 = promt("tal2");
// var summa = Number(tal1) + Number(tal2);
// document.writeln(tal1 +"plus" +tal2+ "blir"+ summa);

var lön = prompt("vad e din lön?");
var skatt = prompt("vad e din %skatt%?");
var pengar = Number(lön)* (100 - Number(skatt)) / 100;
document.writeln("<h1>"+pengar+"</h1>");



