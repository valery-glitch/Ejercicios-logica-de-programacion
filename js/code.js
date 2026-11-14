var can=72;
var pr= ["Arveja","Papa","Garbanzo","Platano","Frijol","Yuca"];
var va= ["5000","9000", "12000", "10000","15000","2000"];
var rpr=[], rca=[];
var n=1, s=0;
var ndia=1;

var ral=[];
menu();
MosEje(70);

const e1b1 = document.querySelector("#e1b1");
e1b1.addEventListener("click", function(){ Eje1(); });

const e2b1 = document.querySelector("#e2b1");
e2b1.addEventListener("click", function(){ Eje2(); });

const e3b1 = document.querySelector("#e3b1");
e3b1.addEventListener("click", function(){ Eje3(); });

const e4b1 = document.querySelector("#e4b1");
e4b1.addEventListener("click", function(){ Eje4(); });

const e5b1 = document.querySelector("#e5b1");
e5b1.addEventListener("click", function(){ Eje5(); });

const e6b1 = document.querySelector("#e6b1");
e6b1.addEventListener("click", function(){ Eje6(); });

const e7b1 = document.querySelector("#e7b1");
e7b1.addEventListener("click", function(){ Eje7(); });

const e8b1 = document.querySelector("#e8b1");
e8b1.addEventListener("click", function(){ Eje8(); });

const e9b1 = document.querySelector("#e9b1");
e9b1.addEventListener("click", function(){ Eje9(); });

const e10b1 = document.querySelector("#e10b1");
e10b1.addEventListener("click", function(){ Eje10(); });

const e12b1 = document.querySelector("#e12b1");
e12b1.addEventListener("click", function(){ Eje12(); });

const e13b1 = document.querySelector("#e13b1");
e13b1.addEventListener("click", function(){ Eje13(); });

const e14b1 = document.querySelector("#e14b1");
e14b1.addEventListener("click", function(){ Eje14(); });

const e15b1 = document.querySelector("#e15b1");
e15b1.addEventListener("click", function(){ Eje15(); });

const e16b1 = document.querySelector("#e16b1");
e16b1.addEventListener("click", function(){ Eje16(); });

const e17b1 = document.querySelector("#e17b1");
e17b1.addEventListener("click", function(){ Eje17(); });

const e19b1 = document.querySelector("#e19b1");
e19b1.addEventListener("click", function(){ Eje19(); });

const e21b1 = document.querySelector("#e21b1");
e21b1.addEventListener("click", function(){ Eje21(); });

const e22b1 = document.querySelector("#e22b1");
e22b1.addEventListener("click", function(){ Eje22(); });

const e23b1 = document.querySelector("#e23b1");
e23b1.addEventListener("click", function(){ Eje23(); });

const e24b1 = document.querySelector("#e24b1");
e24b1.addEventListener("click", function(){ Eje24(); });

const e25b1 = document.querySelector("#e25b1");
e25b1.addEventListener("click", function(){ Eje25(); });

const e26b1 = document.querySelector("#e26b1");
e26b1.addEventListener("click", function(){ Eje26(); });

const e27b1 = document.querySelector("#e27b1");
e27b1.addEventListener("click", function(){ Eje27(); });

const e28b1 = document.querySelector("#e28b1");
e28b1.addEventListener("click", function(){ Eje28(); });

const e29b1 = document.querySelector("#e29b1");
e29b1.addEventListener("click", function(){ Eje29(); });

const e30b1 = document.querySelector("#e30b1");
e30b1.addEventListener("click", function(){ Eje30(); });

const e31b1 = document.querySelector("#e31b1");
e31b1.addEventListener("click", function(){ Eje31(); });

const e32b1 = document.querySelector("#e32b1");
e32b1.addEventListener("click", function(){ Eje32(); });

const e33b1 = document.querySelector("#e33b1");
e33b1.addEventListener("click", function(){ Eje33(); });

const e34b1 = document.querySelector("#e34b1");
e34b1.addEventListener("click", function(){ Eje34(); });

const e35b1 = document.querySelector("#e35b1");
e35b1.addEventListener("click", function(){ Eje35(); });

const e36b1 = document.querySelector("#e36b1");
e36b1.addEventListener("click", function(){ Eje36(); });

const e37b1 = document.querySelector("#e37b1");
e37b1.addEventListener("click", function(){ Eje37(); });

const e38b1 = document.querySelector("#e38b1");
e38b1.addEventListener("click", function(){ Eje38(); });

const e39b1 = document.querySelector("#e39b1");
e39b1.addEventListener("click", function(){ Eje39(); });

const e40b1 = document.querySelector("#e40b1");
e40b1.addEventListener("click", function(){ Eje40(); });

const e41b1 = document.querySelector("#e41b1");
e41b1.addEventListener("click", function(){ Eje41(); });

const e42b1 = document.querySelector("#e42b1");
e42b1.addEventListener("click", function(){ Eje42(); });

const e43b1 = document.querySelector("#e43b1");
e43b1.addEventListener("click", function(){ Eje43(); });

const e44b1 = document.querySelector("#e44b1");
e44b1.addEventListener("click", function(){ Eje44(); });

const e45b1 = document.querySelector("#e45b1");
e45b1.addEventListener("click", function(){ Eje45(); });

const e46b1 = document.querySelector("#e46b1");
e46b1.addEventListener("click", function(){ Eje46(); });

const e47b1 = document.querySelector("#e47b1");
e47b1.addEventListener("click", function(){ Eje47(); });

const e48b1 = document.querySelector("#e48b1");
e48b1.addEventListener("click", function(){ Eje48(); });

const e49b1 = document.querySelector("#e49b1");
e49b1.addEventListener("click", function(){ Eje49(); });

const e50b1 = document.querySelector("#e50b1");
e50b1.addEventListener("click", function(){ Eje50(); });

const e51b1 = document.querySelector("#e51b1");
e51b1.addEventListener("click", function(){ Eje51(); });

const e52b1 = document.querySelector("#e52b1");
e52b1.addEventListener("click", function(){ Eje52(); });

const e53b1 = document.querySelector("#e53b1");
e53b1.addEventListener("click", function(){ Eje53(); });

const e54b1 = document.querySelector("#e54b1");
e54b1.addEventListener("click", function(){ Eje54r(); });

const e54b2 = document.querySelector("#e54b2");
e54b2.addEventListener("click", function(){ Eje54c(); });

const e56b1 = document.querySelector("#e56b1");
e56b1.addEventListener("click", function(){ Eje56(); });

const e59b1 = document.querySelector("#e59b1");
e59b1.addEventListener("click", function(){ Eje59(); });

const e60b1 = document.querySelector("#e60b1");
e60b1.addEventListener("click", function(){ Eje60(); });

const e62b1 = document.querySelector("#e62b1");
e62b1.addEventListener("click", function(){ Eje62(); });

const e63b1 = document.querySelector("#e63b1");
e63b1.addEventListener("click", function(){ Eje63(); });

const e64b1 = document.querySelector("#e64b1");
e64b1.addEventListener("click", function(){ Eje64(); });

const e65b1 = document.querySelector("#e65b1");
e65b1.addEventListener("click", function(){ Eje65(); });

const e66b1 = document.querySelector("#e66b1");
e66b1.addEventListener("click", function(){ Eje66(); });

const e67b1 = document.querySelector("#e67b1");
e67b1.addEventListener("click", function(){ Eje67(); });

const e68b1 = document.querySelector("#e68b1");
e68b1.addEventListener("click", function(){ Eje68(); });

function menu(){
	let txt="";
	for(let i=1; i<=can; i++){
		txt += "<li>";
			txt += "<a href='#' onclick='MosEje("+i+")'>";
				txt += "Ejercicio "+i;
			txt += "</a>";
		txt += "</li>";
	}
	document.getElementById("menu").innerHTML = txt;
}

function MosEje(ne){
	let txt = "";
	txt+="<h2>Ejercicio "+ne;
		if(ne==72) txt+=" - Triqui";
	txt+="</h2>";
	txt+="<hr>";
	for(let i=1;i<=can;i++){
		document.getElementById("eje"+i).style.display = "none";
	}
	document.getElementById("tit").innerHTML = txt;
	document.getElementById("eje"+ne).style.display = "flex";
	if(ne==11) Eje11();
	else if(ne==20) Eje20();
	else if(ne==18) Eje18();
	else if(ne==55){
		Eje55();
		Eje55c();
	}else if(ne==57){
		Eje57();
		Eje57r();
	}else if(ne==58) Eje58();
	else if(ne==61){
		Eje61f();
		Eje61n();
	}else if(ne==69) Eje69();
	else if(ne==70) Eje70();
	else if(ne==71) Eje71();
	else document.getElementById("res").innerHTML = "";
}

function Eje1(){
	let v1= parseInt(document.getElementById("e1v1").value);
	let v2= parseInt(document.getElementById("e1v2").value);
	let txt =""

	txt+="Suma: "+v1+ " + "+v2+" = "+ (v1+v2);
	txt+="<br>Resta: "+v1+ " - "+v2+" = "+ (v1-v2);
	txt+="<br>Multiplicación: "+v1+ " * "+v2+" = "+ (v1*v2);
	if(v2 == 0){
		txt+="<br>División imposible por cero";
	}else{
		txt+="<br>División: "+v1+ " / "+v2+" = "+ (v1/v2);
	} 

	document.getElementById("res").innerHTML= txt;
}
function Eje2(){
	let v1=parseInt(document.getElementById("e2v1").value);
	let v2=parseInt(document.getElementById("e2v2").value);
	let txt=""

	if(v1>v2){
		txt+="Número mayor: "+v1;
	}else if(v1<v2){
		txt+="Número mayor: "+v2;
	}else if(v1 == v2){
		txt+="Ambos valores son iguales";
	}else{
		txt+="Valor Inválido";
	}

	document.getElementById("res").innerHTML=txt;
}

function Eje3(){
	let v1=parseInt(document.getElementById("e3v1").value);
	let txt=""

	if(v1>100){
		txt+=v1+" es mayor que 100";
	}else if(v1<100){
		txt+=v1+" es menor que 100";
	}else if(v1==100){
		txt+=v1+" es igual a 100";
	}else{
		txt+="Valor Inválido";
	}
	document.getElementById("res").innerHTML=txt
}

function Eje4(){
	let v1=parseInt(document.getElementById("e4v1").value);
	let v2=parseInt(document.getElementById("e4v2").value);
	let v3=parseInt(document.getElementById("e4v3").value);
	let txt=""

	if(v1<=v2 && v2<=v3){
		txt+="Números ordenados: "+v1+" "+v2+" "+v3;
	}else if(v2<=v1 && v1<=v3){
		txt+="Números ordenados: "+v2+" "+v1+" "+v3;
	}else if(v3<=v1 && v1<=v2){
		txt+="Números ordenados: "+v3+" "+v1+" "+v2;
	}else if(v2<=v3 && v3<=v1){
		txt+="Números ordenados: "+v2+" "+v3+" "+v1;
	}else if(v1<=v3 && v3<=v2){
		txt+="Números ordenados: "+v1+" "+v3+" "+v2;
	}else{
		txt+="Números ordenados: "+v3+" "+v2+" "+v1;
	}
    document.getElementById("res").innerHTML=txt
}

function Eje5(){
	let v1=parseFloat(document.getElementById("e5v1").value);
	let v2=parseFloat(document.getElementById("e5v2").value);
	let v3=parseFloat(document.getElementById("e5v3").value);
	let txt="";

	if((v1>0 && v2>0 && v3>0) && (v1<=5 && v2<=5 && v3<=5)){
		let promedio=(v1+v2+v3)/3
		if(promedio>=3.5){
			txt+="Promedio: "+promedio.toFixed(2)+"<br> Estudiante Aprobado";
		}else{
			txt+="Promedio: "+promedio.toFixed(2)+"<br> Estudiante Reprobado";
		}
	}else{
		txt+="Las notas deben estar entre 0 y 5";
	}
	document.getElementById("res").innerHTML=txt

} 

function Eje6(){
	let v1=parseFloat(document.getElementById("e6v1").value);
	let v2=parseFloat(document.getElementById("e6v2").value);
	let txt="";

	if(v1>0 && v2>0){
		let area= (v1*v2)/2
		txt+="El área del triángulo es de "+area+" cm";
	}else{
		txt+="Solo se aceptan número positivos";
	}
	document.getElementById("res").innerHTML=txt
}

function Eje7(){
	let v1=parseFloat(document.getElementById("e7v1").value);
	let txt="";

	if(v1>0){
		if(v1%2==0){
		txt+="El número "+v1+" es par";
		}else{
			txt+="El número "+v1+" es impar";
		}
	}else{
		txt+="Solo se aceptan números positivos";
	}
	document.getElementById("res").innerHTML=txt

}

function Eje8(){
	let v1=(document.getElementById("e8v1").value).toLowerCase();
	let v2=parseFloat(document.getElementById("e8v2").value);
	let txt=""
	let pr=0.0, dct=0.0, tdct=0.0, tot=0.0;
	console.log(v1);
	console.log(v2);

	if(v1 == "rojo"){
		pr=4000;
		dct=0.1;
	}else if(v1 == "blanco"){
		pr=5000;
		dct=0.08;
	}else if(v1 == "negro"){
		pr=18000;
		dct=0.0;
	}else{
		pr=6000;
		dct=0.2;
	}

	tdct=(pr*dct)*v2;
	tot=(pr*v2) - tdct;

	txt+="Precio base para las rosas de color <strong>"+v1+": "+pr+"</strong><br>Descuento total ("+(dct*100)+"%): <strong>"+tdct+"</strong><br>Precio final: <strong>"+tot+"</strong>";

	document.getElementById("res").innerHTML=txt
}

function Eje9(){
	let v1=parseFloat(document.getElementById("e9v1").value);
	let v2=parseFloat(document.getElementById("e9v2").value);
	let txt="";
	let pct=0.0, p=0.0;

	if(v1>0 && v1<=100){
		if(v1>=0 && v1<=20){
			p=0.05
			pct=v2*p;
			txt+="Porcentaje ganado por vender <strong>"+v1+"</strong> productos ("+(p*100)+"%): <strong>$"+pct+"</strong>";
		}else if(v1>=21 && v1<=50){
			p=0.1;
			pct=v2*p;
			txt+="Porcentaje ganado por vender <strong>"+v1+"</strong> productos ("+(p*100)+"%): <strong>$"+pct+"</strong>";
		}else if(v1>=51 && v1<=80){
			p=0.15;
			pct=v2*p;
			txt+="Porcentaje ganado por vender <strong>"+v1+"</strong> productos ("+(p*100)+"%): <strong>$"+pct+"</strong>";
		}else{
			p=0.2;
			pct=v2*p;
			txt+="Porcentaje ganado por vender <strong>"+v1+"</strong> productos ("+(p*100)+"%): <strong>$"+pct+"</strong>";
		}
	}else{
		txt+="El número de productos vendidos solo puede ser entre 0 y 100";
	}
	document.getElementById("res").innerHTML=txt
}

function Eje10(){
	let mar=document.getElementById("e10v1").value;
	let mod=document.getElementById("e10v2").value;
	let pre=parseFloat(document.getElementById("e10v3").value);
	let col=document.getElementById("e10v4").value;
	let des, txt="";

	if(col=="Verde"){
		des=0.15;
	}else if(mod<1990){
		des=0.2;
	}else if(col=="Rojo" && mod>1995){
		des=0.1;
	}else{
		des=0.0;
	}
	txt+="<table>";
		txt+="<tr>";
				txt+="<th colspan='2' style='text-align: center;'>"+mar+"</th>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Modelo:</th>";
				txt+="<td>"+mod+"</td>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Precio:</th>";
				txt+="<td style='text-align: right;'>$"+pre+"</td>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Descuento ("+(des*100)+"%):</th>";
				txt+="<td style='text-align: right;'>$"+(pre*des)+"</td>"
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Total:</th>";
				txt+="<td style='text-align: right;'>$"+(pre-pre*des)+"</td>"
		txt+="</tr>";
	txt+="</table>"
	document.getElementById("res").innerHTML=txt;
}

//eje11();

function Eje11(){
	let txt="", i=200;
	txt+="<h3><strong>Decremento</strong></h3>";
	while(i>0){
		txt+=i+" ";
		i-=3;
	}

	txt+="<br><br><h3><strong>Incremento</strong></h3>";
	for(i=2; i<=200; i+=3){
		txt+=i+" ";
	}

	document.getElementById("res").innerHTML=txt;
}

function Eje12(){
	let v1=parseInt(document.getElementById("e12v1").value);
	let txt="", sum=0, a=0, b=1, c=0, i=3;

	if(v1>=10 && v1<=50){
		txt+=a+" "+b+" ";
		sum=a+b;
		while(i<=v1){
			c=a+b;
			txt+=c+" ";
			sum+=c;
			a=b;
			b=c;
			i++;
		}

		txt+="<br><br>Suma de los números generados: <strong>"+sum+"</strong>";
		txt+="<br>Total de números mostrados: <strong>"+v1+"</strong>";
	}else{
		txt+="Solo se aceptan valores entre 10 y 50";
	}

	document.getElementById("res").innerHTML = txt;
}

function soyPrimo(num){
	let primo=true, i=0;

	for(i=2;i<num;i++){
		if(num%i == 0){
			primo=false;
			i=num;
		}
	}
	return primo;
}

function Eje13(){
	let v1= parseInt(document.getElementById("e13v1").value);
	let txt=" ", n=2,i=1;
	if(v1>=10 && v1<=50){
		txt+="<h3><strong>Primeros "+v1+" números primos</strong><h3>";
		while(i<=v1){
			if(soyPrimo(n) ==true){
				txt+=n+" ";
				i++;
			}
			n++;
		}
	}else{
		txt+="Solo se aceptan valores entre 10 y 50";
	}
	
	document.getElementById("res").innerHTML = txt;
}

function Eje14(){
	let v1= parseInt(document.getElementById("e14v1").value);
	let txt=" ", sPar=0, sImp=0, rPar=0, rImp=0, nPar=0, nImp=0;

	if(v1>=10 && v1<=50){
		txt+="<h3><strong>Números Pares</strong><h3>";
		for(let i=1;i<=v1;i++){
			if(i%2 == 0){
				txt+=i+" ";
				sPar+=i;
				rPar-=i;
				nPar++;
			}
		}

		txt+="<br><h3><strong>Números Impares</strong><h3>";
		for(let i=1;i<=v1;i++){
			if(i%2 != 0){
				txt+=i+" ";
				sImp+=i;
				rImp-=i;
				nImp++;
			}
		}
	}else{
		txt+="Solo se aceptan valores entre 10 y 50";
	}
	txt+="<br><br>"
	txt+="<table>";
		txt+="<tr>";
				txt+="<th colspan='2' style='text-align: center;'>Pares</th>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Suma:</th>";
				txt+="<td>"+sPar+"</td>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Resta:</th>";
				txt+="<td style='text-align: right;'>"+rPar+"</td>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Promedio:</th>";
				txt+="<td style='text-align: right;'>"+(sPar/nPar)+"</td>"
		txt+="</tr>";
	txt+="</table>"

	txt+="<br>";

	txt+="<table>";
		txt+="<tr>";
				txt+="<th colspan='2' style='text-align: center;'>Impares</th>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Suma:</th>";
				txt+="<td>"+sImp+"</td>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Resta:</th>";
				txt+="<td style='text-align: right;'>"+rImp+"</td>";
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Promedio:</th>";
				txt+="<td style='text-align: right;'>"+(sImp/nImp)+"</td>"
		txt+="</tr>";
		txt+="<tr>";
				txt+="<th>Diferencia:</th>";
				txt+="<td style='text-align: right;'>"+(sPar-sImp)+"</td>"
		txt+="</tr>";
	txt+="</table>"

	document.getElementById("res").innerHTML = txt;
}

function Eje15(){
	let v1 = parseFloat(document.getElementById("e15v1").value);
	let v2 = parseFloat(document.getElementById("e15v2").value);
	let v3 = parseFloat(document.getElementById("e15v3").value);
	let op = document.getElementById("e15v4").value;

	let txt= " ";
	if(op == "o1"){
		txt+=v1+" + "+v2+" = "+(v1+v2);
	}else if(op == "o2"){
		if(v2 == 0){
			txt+="Error. No se puede dividir en 0";
		}else{
			txt+=v1+" % "+v2+" = "+(v1%v2);
		}
	}else if(op == "o3"){
		if(v2 == 0){
			txt+="Error. No se puede dividir en 0";
		}else{
			txt+=v1+" / "+v2+" = "+(v1/v2);
		}
	}else if(op == "o4"){
		txt+=v1+" + "+v2+" + "+v3+" = "+(v1+v2+v3);
	}else if(op == "o5"){
		txt+=v1+" * "+v2+" * "+v3+" = "+(v1*v2*v3);
	}else{
		txt+="Seleccione una opción";
	}


	document.getElementById("res").innerHTML = txt;

}

function Eje16(){
	let v1=parseInt(document.getElementById("e16v1").value);
	let txt="";

	if(v1%2 == 0 && v1%3==0){
		txt+="<strong>"+v1+"</strong> es divisible por 2 y 3";
	}else if(v1%2 == 0){
		txt+="<strong>"+v1+"</strong> es divisible por 2";
	}else if(v1%3 == 0){
		txt+="<strong>"+v1+"</strong> es divisible por 3";
	}else{
		txt+="<strong>"+v1+"</strong> no es divisible por 2 ni 3";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje17(){
	let v1= parseInt(document.getElementById("e17v1").value);
	let v2= parseInt(document.getElementById("e17v2").value);
	let txt="";

	if(v1>4 && v2>4 && v1<v2){
		txt+="<h3><strong>Números Primos entre "+v1+" y "+v2+"</strong><h3>";
		while(v1<=v2){
			if(soyPrimo(v1)){
				txt+=v1+" ";
			}
			v1++;
		}
	}else{
		txt+="Los valores deben ser mayores a 4 y el primero menor que el segundo";
	}
	document.getElementById("res").innerHTML = txt;
}


function Eje18(){
	let txt = "<strong>Horas Impresas:</strong><br>";
	txt += "<table style='border-collapse:collapse;'>";

	let contador = 0;

	for (let h = 0; h <= 23; h++){
		for (let m = 0; m <= 59; m++){
			for (let s = 0; s <= 59; s++){

				
				let t = 
					String(h).padStart(2,"0") + ":" +
					String(m).padStart(2,"0") + ":" +
					String(s).padStart(2,"0");

				
				if(contador % 14 == 0){
					txt += "<tr>";
				}

				txt += "<td style='padding:8px;'>" + t + "</td>";

				contador++;

				if(contador % 14 == 0){
					txt += "</tr>";
				}
			}
		}
	}

	txt += "</table>";

	document.getElementById("res").innerHTML = txt;
}


function Eje19(){
	let v1= parseInt(document.getElementById("e19v1").value);
	let txt = `
	<table border-collapse:collapse; text-align:center;">
	<tr>
		<th colspan="5">Tabla del ${v1}</th>
	</tr>
	`;

	for(let i = 1; i <= 10; i++){
		txt += `
		<tr>
			<td>${v1}</td>
			<td>*</td>
			<td>${i}</td>
			<td>=</td>
			<td>${v1 * i}</td>
		</tr>`;
	}

	txt += "</table>";
	document.getElementById("res").innerHTML = txt;
}

function Eje20(){
	let txt = "<table style='border-collapse:collapse;'>";
	let cp = 0, ci = 0, cpr = 0, cnpr = 0;
	let c = 0;

	for(let i = 1; i <= 50; i++){
		if(c % 5 == 0){
			txt += "<tr>";
		}
		let n = Math.floor(Math.random() * 96) + 4;
		let texto = n;
		if(n % 2 == 0){
			texto += " Par";
			cp++;
		}else{
			texto += " Impar";
			ci++;
			if(soyPrimo(n)){
				texto += " Primo";
				cpr++;
			}else{
				cnpr++;
			}
		}
		txt += "<td style='padding:10px;'>" + texto + "</td>";

		c++;

		if(c % 5 == 0){
			txt += "</tr>"; 
		}
	}

	txt += "</table>";
	txt+="<br<br><br>"
	txt+= "<table>"
		txt+="<tr>"
			txt+="<th colspan='2' style='text-align:center'>Cantidades</th>"
		txt+="</tr>"
		txt+="<tr>"
			txt+="<th>Pares:</th>"
			txt+="<td style='text-align: right;'>"+cp+"</td>"
		txt+="</tr>"
		txt+="<tr>"
			txt+="<th>Impares:</th>"
			txt+="<td style='text-align: right;'>"+ci+"</td>"
		txt+="</tr>"
		txt+="<tr>"
			txt+="<th>Primos:</th>"
			txt+="<td style='text-align: right;'>"+cpr+"</td>"
		txt+="</tr>"
		txt+="<tr>"
			txt+="<th>No primos:</th>"
			txt+="<td style='text-align: right;'>"+cnpr+"</td>"
		txt+="</tr>"
	txt+="</table>"

	document.getElementById("res").innerHTML = txt;
}

function Eje21(){
	let v1=parseInt(document.getElementById("e21v1").value);
	let v2=parseInt(document.getElementById("e21v2").value);
	let txt="", sum=0, apr="";

	if(v1>0 && v2>0){
		sum = v1 + v2;
		txt+="Suma: <strong>"+sum+"</strong>";
	}else{
		txt+="Los valores deben ser positivos";
	}
	
	document.getElementById("res").innerHTML = txt;
}

function Eje22(){
	let v1=parseFloat(document.getElementById("e22v1").value);
	let v2=parseFloat(document.getElementById("e22v2").value);
	let v3=parseFloat(document.getElementById("e22v3").value);
	let v4=parseFloat(document.getElementById("e22v4").value);
	let txt="", pro=0;

	if((v1>=0 && v2>=0 && v3>=0 && v4>=0) && (v1<=5 && v2<=5 && v3<=5 && v4<=5)){
		pro=(v1+v2+v3+v4)/4;
		apr= pro>=3.5 ? " Estudiante Aprobado" : "Estudiante Reprobado";
		txt+="El promedio de calicaciones es: <strong>"+pro+"</strong><br>"+apr;
	}else{
		txt+="Solo se aceptan valores entre 0.0 y 5.0";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje23(){
	let v1= parseFloat(document.getElementById("e23v1").value);
	let v2= parseFloat(document.getElementById("e23v2").value);
	let txt="", area=0.0;

	if(v1>0 && v2>0){
		area=v1*v2;
		txt+="El área del rectángulo es: <strong>"+area.toFixed(2)+" cm²</strong>";
	}else{
		txt+="Los valores deben ser positivos";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje24(){
	let v1=parseFloat(document.getElementById("e24v1").value);
	let txt="", area=0.0;
	const PI=3.1416;

	if(v1>0){
		area=PI*(v1**2);
		txt+="El área de la circunferencia es: <strong>"+area.toFixed(2)+" cm²</strong>";
	}else{
		txt+="Solo se aceptan valores positivos";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje25(){
	let b=parseFloat(document.getElementById("e25v1").value);
	let a=parseFloat(document.getElementById("e25v2").value);
	let alr=parseFloat(document.getElementById("e25v3").value);
	let txt=""; at=0.0, ar=0.0, area=0.0;

	if(b>0 && a>0 && alr>0){
		at=(b*(a-alr))/2;
		ar=b*alr;
		area=at+ar;
		txt+="El área del terreno es: <strong>"+area.toFixed(2)+" m²</strong>";
	}else{
		txt+="Solo se aceptan valores positivos";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje26(){
	let b=parseFloat(document.getElementById("e26v1").value);
	let h=parseFloat(document.getElementById("e26v2").value);
	let txt=""; cf=0.0, at=0.0, ac=0.0,  area=0.0;
	const PI=3.1416;

	if(b>0 && h>0 &&h>b){
		ac=(PI*(b**2))/2;
		cf= Math.sqrt((h**2)-(b**2));
		at=((b*cf)/2)*2;
		area=at+ac;

		txt+="El área de la figura es: <strong>"+area.toFixed(2)+" cm²</strong>";
	}else{
		
		txt+="Solo se aceptan valores positivos.";
		txt+="<br>La hipotenusa debe ser mayor que la base.";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje27(){
	let l=parseInt(document.getElementById("e27v1").value);
	let pg=parseFloat(document.getElementById("e27v2").value);
	let txt=""; tg=0.0, ga=0.0;

	if(l>0){
		tg=l/3.785;
		ga= tg* pg;

		txt+="Galones producidos: <strong>"+tg.toFixed(2)+"</strong>";
		txt+="<br>Ganancia Total: <strong>$"+ga.toFixed(2)+"</strong>";
	}else{
		txt+="Solo se aceptan valores positivos";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje28(){
	let x1=parseFloat(document.getElementById("e28v1").value);
	let y1=parseFloat(document.getElementById("e28v2").value);
	let x2=parseFloat(document.getElementById("e28v3").value);
	let y2=parseFloat(document.getElementById("e28v4").value);
	let txt="", X=0.0, Y=0.0, dis=0.0;

	X=(x2-x1)**2;
	Y=(y2-y1)**2;
	dis=Math.sqrt(X+Y);

	txt+="La distancia entre los dos puntos: <strong>"+dis.toFixed(2)+"</strong>";
	document.getElementById("res").innerHTML = txt;
}

function Eje29(){
	let cm=parseFloat(document.getElementById("e29v1").value);
	let txt="", pg=0.0;

	if(cm>0){
		pg=cm/0.0254;
		txt+="Cantidad de pulgadas requeridas: <strong>"+pg.toFixed(2)+"</strong>";
	}else{
		txt+="Solo se aceptan valores positivos."
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje30(){
	let a=parseFloat(document.getElementById("e30v1").value);
	let l=parseFloat(document.getElementById("e30v2").value);
	let n=parseFloat(document.getElementById("e30v3").value);
	let cm=parseFloat(document.getElementById("e30v4").value);
	let txt="", v=0.0; pag=0.0;

	if(a>0 && l>0 && n>0){
		v=a*l*n;
		pag=cm*v;

		txt+="Volumen de la alberca: <strong>"+v.toFixed(2)+" m³</strong>";
		txt+="<br>Total a pagar: <strong>$"+pag.toFixed(2)+"</strong>";
	}else{
		txt+="Solo se aceptan valores positivos";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje31(){
	let v1=parseInt(document.getElementById("e31v1").value);
	let v2=parseInt(document.getElementById("e31v2").value);
	let txt="";

	if(v1>v2){
		txt+="<strong>"+v1+"</strong> es mayor que "+v2;
	}else if(v2>v1){
		txt+="<strong>"+v2+"</strong> es mayor que "+v1;
	}else if(v1==v2){
		txt+="Los valores son iguales";
	}else{
		txt+="Valor Inválido";
	}

	document.getElementById("res").innerHTML = txt;

}

function Eje32(){
	let v1=parseInt(document.getElementById("e32v1").value);
	let txt="", r="";

	if(v1>0){
		r+="+";
		txt+="<strong>"+v1+"</strong> es un número positivo (<strong>"+r+"</strong>)";
	}else if(v1<0){
		r+="-";
		txt+="<strong>"+v1+"</strong> es un número negativo (<strong>"+r+"</strong>)";
	}else if(v1==0){
		txt+="<strong>"+v1+"</strong> es un número neutro ";
	}else{
		txt+="Valor Inválido";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje33(){
	let v1=parseInt(document.getElementById("e33v1").value);
	let txt="", pag=0.0, pr=0.0;

	if(v1>0){
		pr=(v1>=1000) ? 0.85 : 0.90;
		pag= pr*v1;
		txt+="Precio por lápiz: <strong>$"+pr+"</strong>";
		txt+="<br>Total a pagar: <strong>$"+pag+"</strong>"
	}else{
		txt+="Solo se permiten valores positivos";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje34(){
	let v1=parseFloat(document.getElementById("e34v1").value);
	let txt="", pf=0.0, des=0.0, tdes;

	if(v1>0){
		des=(v1>2500) ? 0.15 : 0.08;
		tdes=v1*des;
		pf=v1-tdes;

		txt+="Descuento ("+(des*100)+"%): <strong>$"+tdes+"</strong>";
		txt+="<br>Precio final: <strong>$"+pf+"</strong>";
	}else{
		txt+="Solo se aceptan valores positivos";
	}

	document.getElementById("res").innerHTML = txt;

}

function Eje35(){
	let v1=parseFloat(document.getElementById("e35v1").value);
	let v2=parseFloat(document.getElementById("e35v2").value);
	let v3=parseFloat(document.getElementById("e35v3").value);
	let txt="", m=0.0;

	if(v1==v2 && v1==v3){
		txt+="Los valores son iguales";
		document.getElementById("res").innerHTML = txt;
		return;
	}

	else if(v1>=v2 && v1>=v3) m=v1;
	else if(v2>=v1 && v2>=v3) m=v2;
	else if(v3>=v1 && v3>=v2) m=v3;
	
	

	txt+="El valor mayor es: <strong>"+m+"</strong>";

	document.getElementById("res").innerHTML = txt;
}

function Eje36(){
	let v1=parseInt(document.getElementById("e36v1").value);
	let txt="", tot=0.0, des=0.0;

	if(v1>0){
		if(v1>200 && v1<=300) des=85.00;
		else if(v1>300) des=75.00;
		else des=95.00;
		
		tot=v1*des;

		txt+="Costo del platillo por persona: <strong>$"+des+"</strong>";
		txt+="<br>Costo total banquete: <strong>$"+tot+"</strong>";
	}else{
		txt+="Solo se aceptan valores positivos";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje37(){
	let tipo=document.getElementById("e37v1").value;
	let tam=document.getElementById("e37v2").value;
	let pr=parseFloat(document.getElementById("e37v3").value);
	let kg=parseFloat(document.getElementById("e37v4").value);
	let txt="", ga=0.0;

	if(tipo == "A" && tam == "1") pr+=0.20;	
	else if(tipo == "A" && tam == "2") pr+=0.30;
	else if(tipo == "B" && tam == "1") pr-=0.30;
	else if(tipo == "B" && tam == "2") pr-=0.50;
	
	else{
		txt+="Debe seleccionar los valores";
		document.getElementById("res").innerHTML = txt;
		return;

	}
	
	ga=pr*kg;
	txt+="Precio final por kilo: <strong>$"+pr+"</strong>";
	txt+="<br>Ganancia obtenida: <strong>$"+ga+"</strong>";

	document.getElementById("res").innerHTML = txt;

}

function Eje38(){
	let n=parseInt(document.getElementById("e38v1").value);
	let txt="", pa=0.0, tot=0.0;

	if(n>=100){
		pa=65.00;
	}else if(n>=50 && n<=90){
		pa=70.00;
	}else if(n>=30 && n<=49){
		pa=95.00;
	}else if(n>=1 && n<30){
		pa=4000/n;
	}else{
		txt+="Solo se permiten valores mayores a 0";
		document.getElementById("res").innerHTML = txt;
		return;
	}
	
	tot=n*pa;

	txt+="Costo por alumno: <strong>$"+pa.toFixed(2)+"</strong>";
	txt+="<br>Costo total del viaje: <strong>$"+tot.toFixed(2)+"</strong>";

	document.getElementById("res").innerHTML = txt;
}

function Eje39(){
	
	let min=parseInt(document.getElementById("e39v1").value);
	let dia=document.getElementById("e39v2").value;
	let turno=document.getElementById("e39v3").value;
	let txt="", imp=0.0, tot=0.0, sub=0.0, pimp=0.0;

	if(min>0){
		if(min<=5){
			sub = min*1.00;
		}else if(min<=8){
			sub= (5*1.00) +(min-5)*0.80;
		}else if(min<=10){
			sub= (5*1.00)+(3*0.80)+(min-8)*0.70;
		}else{
			sub= (5*1.00)+(3*0.80)+(2*0.70)+(min-10)*0.50;
		}
	}else{
		txt+="Valor Inválido";
		document.getElementById("res").innerHTML = txt;
		return;
	}
	
	
	if(dia=="dg"){
		imp=0.03;
	}else if(dia=="dh"){
		if(turno =="m"){
			imp= 0.15;
		}else if(turno =="v"){
			imp= 0.10;
		}else{
			txt+="Debe seleccionar una opción";
			document.getElementById("res").innerHTML = txt;
			return;
		}
	}else{
		txt+="Debe seleccionar una opción";
		document.getElementById("res").innerHTML = txt;
		return;
	}
	
	pimp=sub*imp;
	tot= sub + pimp;
	
	txt+="Precio base de la llamada: <strong>$"+sub+"</strong>";
	txt+="<br>Valor de impuestos ("+(imp*100)+"%): <strong>$"+pimp.toFixed(3)+"</strong>";
	txt+="<br>Precio total a pagar: <strong>$"+tot.toFixed(3)+"</strong>";
	
	document.getElementById("res").innerHTML = txt;
}

function Eje40(){
	let tipo=document.getElementById("e40v1").value;
	let km= parseFloat(document.getElementById("e40v2").value);
	let npr= parseInt(document.getElementById("e40v3").value);
	let txt="", ck=0.0, cp=0.0, tot=0.0;

	if(tipo == "A") ck=2.0;
	else if(tipo == "B") ck=2.5;
	else if(tipo == "C") ck=3.0;
	else{
		txt+="Debe seleccionar una opción";
		document.getElementById("res").innerHTML = txt;
		return;
	}

	if(npr>=20){
		cp=ck*km;
		tot=cp*npr;
	}else if(npr>0){
		cp=ck*km;
		tot=cp*npr;
	}else{
		txt+="Solo se aceptan valores positivos";
		document.getElementById("res").innerHTML = txt;
		return;
	}

	txt+="Costo por km: <strong>$"+ck+"</strong>";
	txt+="<br>Costo total por persona: <strong>$"+cp+"</strong>";
	txt+="<br>Costo total del viaje: <strong>$"+tot+"</strong>";

	document.getElementById("res").innerHTML = txt;
	
}

function Eje41(){
	let v1=parseInt(document.getElementById("e41v1").value);
	txt="", cc=0.0, ct=0.0;

	if(v1>0 && v1<=30){
		if(v1<=3){
			cc=200.00;
			ct=cc*v1;
		}else if(v1<=5){
			cc=150.00;
			ct=(3*200) + (cc*(v1-3));
		}else if(v1<=8){
			cc=100.00;
			ct =(3*200) + (2*150) +(cc*(v1-5));
		}else{
			cc=50.00;
			ct =(3*200) + (2*150) + (3*100)+ (cc*(v1-8));
		}

		txt+="Costo de la consulta No. "+v1+": "+"<strong>$"+cc+"</strong>";
		txt+="<br>Monto pagado por el tratamiento: <strong>$"+ct+"</strong>";
	}else{
		txt+="Solo se permiten tratamientos entre 1 a 30 consultas";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje42(){
	let nzon=parseInt(document.getElementById("e42v1").value);
	let pe=parseFloat(document.getElementById("e42v2").value);
	let txt="", costo=0.0, tot=0.0;

	if(pe<=5000){
		switch (nzon){
			case 1:
				costo=11.00;
				break;	
			case 2:
				costo=10.00;
				break;	
			case 3:
				costo=12.00;
				break;	
			case 4:
				costo=24.00;
				break;	
			case 5:
				costo=27.00;
				break;	

			case 0:
				txt+="Debe seleccionar una opción";
				document.getElementById("res").innerHTML = txt;
				return;		
		}

		tot=pe*costo;
		txt+="Costo por gramo: <strong>$"+costo+"</strong>";
		txt+="<br>Costo de la entrega: <strong>$"+tot+"</strong>";
	}else{
		txt+="<strong>PAQUETE RECHAZADO</strong>. Paquetes con peso superior a 5kg no son transportados.";
		
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje43(){
	let tt=parseInt(document.getElementById("e43v1").value);
	let lim=parseFloat(document.getElementById("e43v2").value);
	let txt="", aum=0.0, taum=0.0, nlim=0.0;

	if(tt!=0){
		if(lim>0){
			if(tt==1) aum=0.25;
			else if(tt==2) aum=0.35;
			else if(tt==3) aum=0.4;
			else aum=0.5;
				
			taum=lim*aum;
			nlim=lim+taum;
				
			txt+="Aumento de crédito ("+(aum*100)+"%): <strong>$"+taum+"</strong>";
			txt+="<br>Límite anterior de crédito: <strong>$"+lim+"</strong>";
			txt+="<br>Nuevo límite de crédito: <strong>$"+nlim+"</strong>";
		}else{
			txt+="Ingrese un límite de crédito válido.";
		}
		
	}else{
		txt+="Debe seleccionar una opción.";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje44(){
	let vcom=parseFloat(document.getElementById("e44v1").value);
	let s=document.getElementById("e44v2").value;
	let txt="", n=0, premio="";
	const ph = ["Bicicleta", "Kit de destornilladores","Máquina para afeitar"];
	const pm = ["Kit de Maquillaje", "Kit de cuidado corporal","Secador de cabello"];
	const b = ["Balota 1", "Balota 2", "Balota 3"];

	if(vcom>=25000){
		if(s!="o"){
			txt+="<strong>Felicidades!</strong>";
			txt+="<br>Por su compra superior a $25.000 puede ganar 1 de 3 premios.";

			n = Math.floor(Math.random() * 3);

			txt+="<br><br><strong>Posibles Premios</strong>";
			if(s=="m"){
				for(let i=0;i<=2;i++){
					txt+="<br>"+(i+1)+". "+ph[i];
				}
				premio=ph[n];
			}else{
				for(let i=0;i<=2;i++){
					txt+="<br>"+(i+1)+". "+pm[i];
					premio=pm[n];
				}
			}

			txt+="<br><br>Balota obtenida: <strong>"+b[n]+"</strong>";
			txt+="<br>Premio ganado: <strong>"+premio+"</strong>";
			txt+="<br><br><br>Muchas gracias por su compra!";

		}else{
			txt+="Debe seleccionar su género.";
		}
	}else{
		txt+="Debe realizar una compra superior a <strong>$25.000</strong> para ganar un premio.";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje45(){
	let v1=parseFloat(document.getElementById("e45v1").value);
	let v2=parseFloat(document.getElementById("e45v2").value);
	let op=parseInt(document.getElementById("e45v3").value);
	let txt="";

	if(op!=0){
		if(op==1) txt+=v1+" + "+v2+" = "+"<strong>"+(v1+v2)+"</strong>";
		else if(op==2) txt+=v1+" - "+v2+" = "+"<strong>"+(v1-v2)+"</strong>";
		else if(op==3) txt+=v1+" x "+v2+" = "+"<strong>"+(v1*v2)+"</strong>";
		else{
			if(v2==0) txt+="<strong>Error</strong>. No se puede dividir entre 0."
			else txt+=v1+" / "+v2+" = "+"<strong>"+(v1/v2).toFixed(2)+"</strong>";
			}	
	} else txt+="Seleccione una opción."

	document.getElementById("res").innerHTML = txt;
}

function Eje46(){
	let v1=parseInt(document.getElementById("e46v1").value);
	let op=parseInt(document.getElementById("e46v2").value);
	let txt=" ", f=1;

	if(op!=0){
		if(v1>0){
			if(op==1){
				if(soyPrimo(v1)) txt+="<strong>"+v1+"</strong> es un número primo";
				else txt+="<strong>"+v1+"</strong> no es un número primo";
			}else if(op==2){
				if(v1<=20){
					txt+="<strong>Factorial de "+v1+"</strong><br>";
					for(let i=1;i<=v1;i++){
						f*=i;
						if(i!=v1) txt+=i+" x ";
						else txt+=i;
					}
					txt+="<br><br>Total: <strong>"+f+"</strong>";
				}else{
					txt+="Ingrese valores entre 1 y 20."
				}
				
			}else{
				txt += `
				<table>
				<tr>
					<th colspan="5">Tabla del ${v1}</th>
				</tr>`;
				for(let i = 1; i <= 10; i++){
					txt += `
					<tr>
						<td>${v1}</td>
						<td>*</td>
						<td>${i}</td>
						<td>=</td>
						<td>${v1 * i}</td>
					</tr>`;
				}
				txt += "</table>";
			}
		}else{
			txt+="Solo se aceptan valores positivos";
		}
	}else{
		txt+="Seleccione un opción.";
	}

	document.getElementById("res").innerHTML = txt;
}

function Eje47(){
	let v1=parseInt(document.getElementById("e47v1").value);
	let txt=" ", i=2;

	if(v1>=10 && v1<=100){
		txt+="<h3><strong>Números Primos entre 1 y "+v1+"</strong></h3>";
		while(i<=v1){
			if(soyPrimo(i)){
				txt+=i+" ";
			}
			i++;
		}
	}else{
		txt+="Ingrese un valor entre 10 y 100";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje48(){
	let np=parseInt(document.getElementById("e48v1").value);
	let nm=parseInt(document.getElementById("e48v2").value);
	let txt="", nh=0, pm=0.0, ph=0.0;

	if(np>=10 && np<=5000){
		if(nm<=np){
			nh=np-nm;
			pm= (nm*100.00) / np;
			ph= (nh*100.00) / np;
			
			txt+="Número de hombres: <strong>"+nh+"</strong>";
			txt+="<br>Porcentaje de mujeres: <strong>"+pm.toFixed(2)+"</strong>%";
			txt+="<br>Porcentaje de hombres: <strong>"+ph.toFixed(2)+"</strong>%";
		}else{
			txt+="Debe ingresar en número de mujeres un valor entre 0 - "+np;
		}
	}else{
		txt+="Ingrese un valor entre 10 - 5000";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje49(){
	let v1=parseInt(document.getElementById("e49v1").value);
	let txt="", suma=0, n=0;

	if(v1>=5 && v1<=10){
		txt+="<h3><strong>Listado de Valores</strong></h3>";
		for(let i=1;i<=v1;i++){
			n=Math.floor(Math.random()*1999)+1;
			txt+=n+" ";
			suma+=n;
		}
		txt+="<br><br>Suma de los valores: <strong>"+suma+"</strong>";
	}else{
		txt+="Ingrese un valor entre 5 - 10";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje50(){
	let c=parseInt(document.getElementById("e50v1").value);
	let n=[], p=[], m=[], cp=0, ci=0;
	let txt="";

	if(c>0 && c<=1000){
		txt+= "<h3><strong>Listado de Valores</strong><h3>";
		for(let i=0; i<c; i++){
			n.push(Math.floor(Math.random()*1999)+1);
			txt += n[i]+" ";
			if(n[i]%2==0){
				p.push(n[i]);
				cp++;
			}else{
				m.push(n[i]);
				ci++;
			}
		}
		//Mostrar
		txt += "<br><br><h3><strong>Listado Pares ("+cp+")</strong><h3>"
		for(i=0; i<cp;i++) txt+=p[i]+" ";

		txt += "<br><br><h3><strong>Listado Impares ("+ci+")</strong><h3>"
		for(i=0; i<ci;i++) txt+=m[i]+" ";

	}else txt+="Solo se permiten valores entre 1 y 1000";

	document.getElementById("res").innerHTML = txt;
	
}

function crearTabla(tit, res, v=[], s){
	let txt="";
	txt+="<br>";
		for(let i=0;i<140;i++) txt+="-";
		txt+="<br>"
		txt+="<table>";
			txt+="<tr>";
				txt+="<th colspan='6' style='text-align:center; padding-bottom:20px'>"+tit+" ("+v.length+")</th>"
			txt+="</tr>";
			for(let i=0;i<v.length;i++){
				if((i+1)%6==1) txt+="<tr>";
				txt+="<td style='padding:2px 40px'>$"+v[i]+"</td>"
				if((i+1)%6==0) txt+="</tr>";
			}
			txt+="<tr>";
				txt+="<th colspan='6' style='text-align:left; padding-top:10px'>"+res+"$"+s.toFixed(2)+"</th>"
			txt+="</tr>";
		txt+="</table>";
	return txt;
}

function Eje51(){
	let v1=parseInt(document.getElementById("e51v1").value);
	let vm=[], vme=[], vma=[], lv=[], v=0, svm=0, st=0, svme=0, svma=0;
	let txt="";
	if(v1>=10 && v1<=100){
		for(let i=1;i<=v1;i++){
			v=Math.floor(Math.random()*990)+10;
			lv.push(v);
			st+=v;
			if(v<200){
				vme.push(v);
				svme+=v;
			}else if(v>200 && v<=550){
				vm.push(v);
				svm+=v;
			}else if(v>550){ 
				vma.push(v);
				svma += v;
			}
		}
		txt += crearTabla("Listado de Ventas", "TOTAL: ",lv, st);
		txt += crearTabla("Ventas Menores a $200", "Promedio: ", vme, (svme/vme.length));
		txt += crearTabla("Ventas Entre $200-$550", "Promedio: ", vm, (svm/vm.length));
		txt += crearTabla("Ventas Mayores a $550", "Promedio: ", vma, (svma/vma.length));
	}else{
		txt+="Solo se permiten valores entre 10 y 100";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje52(){
	let v1=parseInt(document.getElementById("e52v1").value);
	let txt="", suma=0, c=0, n=0;

	if(v1>=10 && v1<=20){
		txt+= "<h3><strong>Listado de Valores</strong><h3>";
		while(c<v1){
			n=Math.floor(Math.random()*999)+1;
			suma+=n;
			txt+=n+" ";
			c++
		}
		txt+="<br><br>Suma total: <strong>"+suma+"</strong>"
	}else{
		txt+="Ingrese un valor entre 10 y 20";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje53(){
	let v1=parseInt(document.getElementById("e53v1").value);
	let txt="",su=0, pr=0, n=0;

	if(v1>=3 && v1<=30){
		txt+="<h3><strong>Listado de Edades</strong></h3>";
		for(let i=0; i<v1;i++){
			n= Math.floor(Math.random()*8)+10;
			txt+=n+" ";
			su+=n;
		}
		pr=su/v1;
		txt+="<br><br>Edad Promedio: <strong>"+pr.toFixed(2)+"</strong>";
	}else txt+="Ingrese un valor entre 3 y 30.";
	document.getElementById("res").innerHTML = txt;
}

function Eje54r(){
	let txt="";
	let v1=parseFloat(document.getElementById("e54v1").value);
	if(v1>=0.50 && v1<=2.50){
		if(ral.length>30) txt+="Límite de alturas alcanzado";
		else{
			ral.push(v1);
			txt += "Altura registrada: <strong>"+v1+"</strong>";
		}
	} 
	else txt+="Ingrese valores entre 0.50 y 2.50";
	document.getElementById("res").innerHTML = txt;
}

function Eje54c(){
	let txt="", su=0, pr=0;
	if(ral.length>0){
		txt+="<h3><strong>Lista de Alturas Ingresadas ("+ral.length+")</strong></h3>"
		for(let i=0;i<ral.length;i++){
		txt+=ral[i]+"&nbsp;&nbsp;&nbsp;&nbsp;";
		su+=ral[i];
		}
		pr=su/ral.length;
		txt+="<br><br>Promedio:&nbsp;&nbsp;&nbsp;<strong>"+pr.toFixed(2)+"</strong>";
	}else txt+="Debe registrar alturas."
	
	document.getElementById("res").innerHTML = txt;
}

function Eje55(){
	let txt="";
	txt+="<h3>Ahorro Mensual</h3>"
	txt+="<div class='col-md-6'>";
		txt+="<label>Ahorro Mes "+n+":</label>"
		txt += "<input type='number' class='form-control' id='e55v1' value='0'>"
	txt+="</div>"
	txt+="<div class='col-md-6'>";
		txt+="<br>"
		txt += "<input type='button' class='form-control btn btn-primary' onclick='Eje55c()' value='Mostrar'>"
	txt+="</div>"
	document.getElementById("eje55").innerHTML = txt;
}

let lista=[];
function Eje55c(){
	let txt="";
	let v1=parseFloat(document.getElementById("e55v1").value);
	if(v1>0){
		if(n<=12){ 
			lista.push(v1);
			s+=v1;
			if(n!=12){
				txt+="Ahorro Hasta el Mes "+n;
				txt+=": <strong>$"+s+"</strong>";
				n++;
				Eje55();
			}else if(n==12){
				txt+=tabla();
				n++;
			}
		}else txt+=tabla();
	}else txt+="Ingrese valores mayores a 0";
	document.getElementById("res").innerHTML = txt;
}

function tabla(){
	let txt="";
	txt+="<br><h3><strong>Resumen de Ahorros</strong></h3><br><br>";
	txt+="<table cellpadding='10px'>"
		txt += "<tr>";
		for(let i=1;i<=6;i++){
			txt+="<th>Mes "+i+"</th>"
		}
		txt += "</tr>";
		txt += "<tr>";
		for(let i=0;i<6;i++){
			txt += "<td>"+lista[i]+"</td>";
		}
		txt += "</tr>";
		txt += "<tr>";
		for(let i=7;i<=12;i++){
			txt+="<th style='padding-top:10px'>Mes "+i+"</th>"
		}
		txt += "</tr>";
		txt += "<tr>";
		for(let i=6;i<lista.length;i++){
			txt += "<td>"+lista[i]+"</td>";
		}
		txt += "</tr>";
		txt += "<tr>";
			txt += "<th colspan='3' style='padding-top:10px'>Ahorro Total</th>"
			txt += "<th>$"+s+"</th>";
		txt += "</tr>";
	txt+="</table>"
	return txt;
}

function Eje56(){
	let v1=parseInt(document.getElementById("e56v1").value);
	let txt="", A=0, B=1, C=0, c=0;
	if(v1>=10 && v1<=50){
		txt+="<h3><strong>Sucesión de Fibonacci "+v1+" valores</strong></h3>";
		txt+="<br>"+A+" "+B+" ";
		while(c<v1){
			C=A+B;
			txt+=C+" ";
			A=B;
			B=C;
			c++;
		}
	}else txt+="Solo se aceptan valores entre 10 y 50";
	document.getElementById("res").innerHTML = txt;
}

function Eje57(){
	let txt="";
	txt+="<h3>Sueldo por horas trabajadas semanalmente</h3>"
	txt += "<div class='col-md-6'>";
		txt += "<label>Día "+ndia+" hrs:</label>";
		txt += "<input type='number' class='form-control' id='e57v1' value='0'>"
	txt += "</div>"
	txt += "<div class='col-md-6'>";
		txt += "<br>";
		txt += "<input type='button' class='form-control btn btn-primary' onclick='Eje57r();' value='Registrar Hora'>"
	txt += "</div>"
	txt += "<div class='col-md-6'>";
		txt += "<label>Valor Hora:</label>";
		txt += "<input type='number' class='form-control' id='e57v2' value='20'>"
	txt += "</div>"
	txt += "<div class='col-md-6'>";
		txt += "<br>";
		txt += "<input type='button' class='form-control btn btn-primary' onclick='Eje57c();' value='Calcular Sueldo'>"
	txt += "</div>"
	document.getElementById("eje57").innerHTML = txt;
}

let hSemana=[];
function Eje57r(){
	let hr = parseFloat(document.getElementById("e57v1").value);
	txt=" ";
	if(ndia<7){
		if(hr>0 && hr<24){
			txt+="Número de horas del día <strong>"+ndia+"</strong> registradas.";
			hSemana.push(hr);
			ndia++;
			Eje57();
		}else{
			txt+="Ingrese valores válidos.";
		}
	}else txt+="Ya realizó el ingreso de las horas solicitadas.";
	document.getElementById("res").innerHTML = txt;
}

function Eje57c(){
	let pr = parseInt(document.getElementById("e57v2").value);
	let txt="", sum=0, tot=0;
	if(hSemana.length >= 6){
		txt+="<h3><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sueldo Semanal</strong></h3>"
		txt+="<table cellpadding='10px'>"
		txt+="<tr>";
		for(let i=1;i<=6;i++) txt+="<th>Día "+i+"</th>";
		txt+="</tr>"
		txt+="<tr>"
		for(let i=0; i<hSemana.length; i++){
			sum += hSemana[i];
			txt+="<td>"+hSemana[i]+"</td>";
		}
		txt+="</tr>"
		tot = sum * pr;
		txt += "<tr>";
			txt += "<th colspan='3'>Horas</th>"
			txt += "<th>"+sum+"</th>";
		txt += "</tr>";
		txt += "<tr>";
			txt += "<th colspan='3'>TOTAL</th>"
			txt += "<th>$"+tot+"</th>";
		txt += "</tr>";
		txt+="</table>"

	}else txt+="Debe ingresar el número de horas trabajadas los "+(6-hSemana.length)+" días restantes";
	document.getElementById("res").innerHTML = txt;
}

function Eje58(){
	let ka=70, kb=150;
	let txt="", km=0;
	txt+=""
	txt+="<h3><strong>Persona 1</strong><br>Kilómetro "+ka+"<br>Dirección: Zacatecas</h3>";
	txt+="<h3><strong>Persona 2</strong><br>Kilómetro "+kb+"<br>Dirección: Aguascalientes</h3>";
	for(ka; ka<=kb; ka++){
		kb--;
		km=ka;
	}
	txt+="<br><h3>Kilómetro de encuentro: <strong>"+km+"</strong></h3>";
	document.getElementById("res").innerHTML = txt;
}

function Eje59(){
	let v1 = parseInt(document.getElementById("e59v1").value);
	let txt="", rel="TOTAL: ";
	let ta =[], tb=[], tc=[], v=[], sa=0, sb=0, sc=0, stot=0, num=0;

	if(v1>=10 && v1<=100){
		for(let i=0; i<v1; i++){
			num = Math.floor(Math.random()*1490) + 10;
			v.push(num);
			stot+=num;
			if(num<=500){ 
				tc.push(num);
				sc+=num;
			}
			else if(num>500 && num<=1000){
				tb.push(num);
				sb+=num;
			}
			else if(num>1000){
				ta.push(num);
				sa+=num;
			}
		}
		txt += crearTabla("Listado de Ventas", rel, v, stot);
		txt += crearTabla("Tipo C - Menores a $500", rel, tc, sc);
		txt += crearTabla("Tipo B - Entre $500-$1000", rel, tb, sb);
		txt += crearTabla("Tipo A - Mayores a $1000", rel, ta, sa);

	}else txt+="Ingrese valores entre 10 y 100.";
	document.getElementById("res").innerHTML = txt;
}

function Eje60(){
	let v1 = parseInt(document.getElementById("e60v1").value);
	let v2 = parseInt(document.getElementById("e60v2").value);
	let txt="", hr=0, tot=0, sum=0;
	if(v1 >=10 && v1 <= 100 && v2>0){
		txt+="<table cellpadding='10px'>"
		txt+="<tr>";
			txt+="<th>Empleado</th>";
			txt+="<th>Horas trabajadas</th>";
			txt+="<th>Valor a Pagar</th>";
		txt+="</tr>";
		for(let i=1;i<=v1;i++){
			hr = Math.floor(Math.random()*90) + 30;
			tot = hr * v2;
			sum+=tot;
			txt+="<tr>";
				txt+="<td>No. "+i+"</td>";
				txt+="<td style='text-align:center'>"+hr+"</td>";
				txt+="<td style='text-align:center'>$"+tot+"</td>";
			txt+="</tr>";
		}
		txt+="<tr>";
				txt+="<th colspan='6' style='text-align:left; padding-top:10px'>TOTAL A CANCELAR:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+sum.toFixed(2)+"</th>"
			txt+="</tr>";
		txt+="</table>"
	}else txt+="Ingrese valores entre 10 - 50 y/o valores positivos.";
	document.getElementById("res").innerHTML = txt;
}


function Eje61f(){
	let txt="";
	txt += "<div class='col-md-4'>";
		txt += "<label>Producto: </label>";
		txt+="<select class='form-control form-select' id='e61v1'>";
			for(let y=0;y<pr.length;y++)
				txt+="<option value='"+y+"'>"+pr[y]+" $ "+va[y]+"</option>";
		txt+="</select>";
	txt += "</div>"
	txt += "<div class='col-md-4'>";
		txt += "<label>Cantidad:</label>"
		txt += "<input type='number' class='form-control' id='e61v2' value='1'>"
	txt += "</div>"
	txt += "<div class='col-md-4'>";
		txt += "<br>"
		txt += "<input type='button' class='form-control btn btn-primary' onclick='Eje61r();' value='Registrar'>"
	txt += "</div>"
	document.getElementById("eje61").innerHTML = txt;
}

function Eje61r(){
	let prd = document.getElementById("e61v1").value;
	let can = document.getElementById("e61v2").value;
	rpr.push(prd);
	rca.push(can);
	Eje61n();
}

function Eje61n(){
	let txt="", to=0;
	txt += "<table cellpadding='10px' style='width=100%'>"
		txt += "<tr>";
			txt += "<th>Producto</th>"
			txt += "<th>Cantidad</th>"
			txt += "<th>Valor Unitario</th>"
			txt += "<th>Valor Total</th>"
		txt += "</tr>";
		for(let i=0;i<rpr.length;i++){
		txt += "<tr>";
			txt += "<td>"+pr[rpr[i]]+"</td>";
			txt += "<td>"+rca[i]+"</td>";
			txt += "<td>"+va[rpr[i]]+"</td>";
			txt += "<td>"+(va[rpr[i]]*rca[i])+"</td>";
			to += va[rpr[i]]*rca[i];
		txt += "</tr>";
		}
		txt += "<tr>";
			txt += "<th colspan='3'>TOTAL</th>"
			txt += "<th>"+to+"</th>";
		txt += "</tr>";
	txt+="</table>";

	document.getElementById("res").innerHTML = txt;
}

function Eje62(){
	let v1 = parseInt(document.getElementById("e62v1").value);
	let txt="", num=0, sum=0, c=0;
	if(v1>=5 && v1<=20){
		txt+="<br><h3><strong>Listado de Valores</strong><h3>";
		do{
			num = Math.floor(Math.random()*195) + 5;
			sum += num;
			txt+=num+" ";
			c++;
		}
		while(c<v1);
		txt+="<br><br>Suma: <strong>"+sum+"</strong>";
	}else txt+="Ingrese valores entre 5 y 20";
	document.getElementById("res").innerHTML = txt;
}

function Eje63(){
	let v1 = parseInt(document.getElementById("e63v1").value);
	let txt="", nme=[], nma=[], cero=[], num=0;

	if(v1>=5 && v1<=50){
		txt+="<br><h3><strong>Listado de Valores</strong></h3>"
		for(let i=0; i<v1; i++){
			num = Math.floor(Math.random()*140) - 70;
			txt+=num+" ";
			if(num>0) nma.push(num);
			else nme.push(num);
		}
		txt+="<br><br><h3><strong>Valores Menores o iguales a 0 ("+nme.length+")</strong></h3>"
		for(let i=0; i<nme.length; i++) txt+=nme[i]+" ";
		txt+="<br><br><h3><strong>Valores Mayores a 0 ("+nma.length+")</strong></h3>"
		for(let i=0; i<nma.length; i++) txt+=nma[i]+" ";
	}else txt+="Ingrese valores entre 5 y 50";
	document.getElementById("res").innerHTML = txt;
}

function Eje64(){
	let v1 = parseInt(document.getElementById("e64v1").value);
	let txt="", nums=[], sum=0, val=0;

	if(v1>=5 && v1<=20){
		txt+="<br><h3><strong>Listado de Valores</strong></h3>";
		for(let i=0; i<v1; i++){
			val = Math.floor(Math.random()*195 ) + 5;
			nums.push(val);
			txt+=nums[i]+" ";
			sum += nums[i];
		}
		txt+="<br><br>Suma: <strong>"+sum+"</strong>";

	}else txt+="Ingrese valores entre 5 y 20.";
	document.getElementById("res").innerHTML = txt;
}

function ordenarNumeros(nums){
	for(let i=0; i<(nums.length-1); i++){
		for(let j=i+1; j<nums.length; j++){
			if(nums[i] > nums[j]){
				let aux = nums[i];
				nums[i] = nums[j];
				nums[j] = aux;
			}
		}
	}
	return nums;
}

function Eje65(){
	let v1 = parseInt(document.getElementById("e65v1").value);
	let txt="", num=0, nPos=[], nNeg=[], mayor=0, menor=0, sPos=0, sNeg=0;

	if(v1>=5 && v1<=50){
		txt+="<br><h3><strong>Listado de Valores</strong></h3>";
		for(let i=0; i<v1; i++){
			num = Math.floor(Math.random()*400) - 200;
			txt+=num+" ";
			if(num>0){
				nPos.push(num);
				sPos += num;
			}
			else{
				nNeg.push(num);
				sNeg += num;
			}
		}
		nPos = ordenarNumeros(nPos);
		nNeg = ordenarNumeros(nNeg);

		if(nPos.length > 0 && nNeg.length == 0){
			menor = nPos[0];
			mayor = nPos[nPos.length-1];
		}else if(nNeg.length > 0 && nPos.length == 0){
			menor = nNeg[0];
			mayor = nNeg[nNeg.length-1];
		}else{
			menor = nNeg[0];
			mayor = nPos[nPos.length-1];
		}
		txt+="<br><br><h3><strong>Números Negativos ("+nNeg.length+")</strong></h3>";
		for(let i=0; i<nNeg.length; i++) txt+=nNeg[i]+" ";
		txt+="<br>Suma: <strong>"+sNeg+"</strong>";

		txt+="<br><br><h3><strong>Números Positivos ("+nPos.length+")</strong></h3>";
		for(let i=0; i<nPos.length; i++) txt+=nPos[i]+" ";
		txt+="<br>Suma: <strong>"+sPos+"</strong>";

		txt+="<br><br>Número Menor: <strong>"+menor+"</strong>";
		txt+="<br>Número Mayor: <strong>"+mayor+"</strong>";

	}else txt+="Ingrese valores entre 5 y 50";
	document.getElementById("res").innerHTML = txt;
}

function Eje66(){
	let v1 = parseInt(document.getElementById("e66v1").value);
	let txt="", nums=[], n=0, pos=[], enc=false;
	if(v1>=1 && v1<=200){
		txt+="<br><h3><strong>Listado de Valores</strong></h3>";
		//Llenar el vector
		for(let i=0; i<100; i++){
			n = Math.floor(Math.random () * 200) + 1
			nums.push(n);
			txt+=n+" ";
		}
		//Buscar el valor
		for(let i=0; i<nums.length; i++){
			if(nums[i] == v1){
				pos.push(i);
				enc = true;
			}
		}
		if(enc){
			txt+="<br><br>Valor encontrado!<br>Posición: <strong>";
			for(let i=0; i<pos.length; i++) txt+=pos[i]+"&nbsp;&nbsp;&nbsp;";
			txt+="</strong>"
		}else{
			txt+="<br><br>Valor no encontrado.";
		}

	}else{
		txt+="Ingrese valores entre 1 y 200.";
	}
	document.getElementById("res").innerHTML = txt;
}

function Eje67(){
	let v1 = parseInt(document.getElementById("e67v1").value);
	let txt="", nums=[], n=0;
	if(v1>=5 && v1<=50){
		txt+="<h3><strong>Arreglo Original</strong></h3>";
		for(let i=0; i<v1; i++){
			n = Math.floor(Math.random() * 200) + 1;
			nums.push(n);
			txt+=nums[i]+" "
		}
		let i = 0, c = nums.length -1 ;
		while(i<c){
			let v = nums[i];
			nums[i] = nums[c];
			nums[c] = v;
			i++;
			c--;
		}
		txt+="<br><br><h3><strong>Arreglo Invertido</strong></h3>";
		for(i=0; i<nums.length; i++) txt+=nums[i]+" ";
	}else txt+="Ingrese valores entre 5 y 50.";
	document.getElementById("res").innerHTML = txt;
}

let values = [];

function Eje68(){
	let v1 = parseInt(document.getElementById("e68v1").value);
	let txt="", sum=0, pr=0;
	if(v1>=0){
		values.push(v1);
	}else {
		txt+="Número negativo ingresado.<br><br>";
		e68b1.disabled = true;
	}

	if(values.length>0){
		txt+="<h3><strong>Números Ingresados</strong></h3>";
		for(let i=0;i<values.length;i++){
			sum += values[i];
			txt += values[i] + " ";
		}
		pr = sum/values.length;
		txt+="<br><br>Promedio: <strong>"+pr.toFixed(2)+"</strong>";
	}else txt+="No se ingresaron números positivos.";
	document.getElementById("res").innerHTML = txt;
}

function Eje69(){
	let m= [[4.5, 3.2, 4.1, 3.0, 1], 
			[3.2, 1.2, 2.0, 4.0, 3.0], 
			[1.0, 3.5, 1.0, 3.0, 2.0], 
			[4.5, 3.0, 4.5, 1.0, 1.4], 
			[2.0, 4.0, 4.1, 2.0, 3.0]];
	let txt="", s;
	txt+="<h3><strong>Listado de Notas</strong></h3>";
	txt += "<table>"
	for(let f=0; f<5; f++){
		txt+="<tr>"
		s = 0.0;
		for(let c=0; c<5; c++){
			txt += "<td style='padding-bottom:5px; padding-right:30px'>"
			+m[f][c].toFixed(1)+"</td>";
			s += m[f][c]; 
		}
		txt += "<td style='padding-bottom:5px; padding-right:30px'>=</td>"
		txt+= "<td>"+(s/5).toFixed(2);
		if(s/5 >= 3.5) txt+= " / Aprobado";
		txt += "</td>";
		txt += "</tr>";
	}
	txt += "</table>"

	txt+="<br><h3><strong>Notas Aprobadas</strong></h3>";
	txt += "<table>"
	for(let f=0; f<5; f++){
		txt += "<tr>"
		for(let c=0; c<5; c++){
			if(m[f][c] >= 3.5)
				txt += "<td style='padding-bottom:5px; padding-right:30px'>"
					+m[f][c].toFixed(1)+"</td>";
		}
		txt+="</tr>"
	}
	txt += "</table>"
	document.getElementById("res").innerHTML = txt;
}

function Eje70(){
	let txt="", v=[], m=[[],[],[],[],[]], aux=0, s=0, cp=0;
	txt+="<br><h3><strong>Matriz Original</strong></h3>";
	txt += "<table>";
	for(let f=0; f<5; f++){
		txt += "<tr>";
		for(let c=0; c<5; c++){
			m[f][c] = Math.floor(Math.random() * 99) + 1;
			v.push(m[f][c]);
			s += m[f][c];
			txt += "<td style='padding-bottom:5px; padding-right:30px'>"
					+m[f][c]+"</td>";
		}
		txt+="</tr>"
	}
	txt += "</table>"
	v = ordenarNumeros(v);
	txt+="<br><h3><strong>Matriz Ordenada</strong></h3>";
	txt += "<table>"
	for(let f=0; f<5; f++){
		txt += "<tr>"
		for(let c=0; c<5; c++){
			m[f][c] = v[cp];
			txt += "<td style='padding-bottom:5px; padding-right:30px'>"
					+m[f][c]+"</td>";
			cp++;
		}
		txt += "</tr>"
	}
	txt += "</table>"
	txt += "<br>Número Menor: &nbsp;<strong>"+m[0][0]+"</strong>";
	txt += "<br>Número Mayor: &nbsp;<strong>"+m[4][4]+"</strong>";
	txt += "<br>Promedio: &nbsp;&nbsp;&nbsp;<strong>"+(s/25).toFixed(2)+"</strong>";
	document.getElementById("res").innerHTML = txt;
}

function Eje71(){
	let x= [[3,4,2],[8,9,1],[5,6,7]];
	let y= [[5,2,8],[1,9,3],[4,6,7]];
	let z=[[],[],[]];
	let txt="";
	txt+="<h3><strong>Matriz X</strong><h3><br>";
	txt+=mosM(x, false);
	txt+="<br><h3><strong>Matriz Y</strong><h3><br>";
	txt+=mosM(y, false);

	txt+="<br><h3><strong>Multiplicación de Matrices</strong><h3><br>";
	for(let f=0;f<3;f++){
		for(let c=0;c<3;c++){
			z[f][c]=0;
			for(let k=0;k<3;k++){
				z[f][c]+=x[f][k]*y[k][c];
			}
		}
	}
	txt+=mosM(z, true);
	document.getElementById("res").innerHTML = txt;
}

function mosM(p,m){
	let sf, sc;
	let txt="";
	txt += "<table>";
	for(let f=0;f<3;f++){
		sf=0;sc=0;
		txt += "<tr>";
		for(let c=0;c<3;c++){
			txt+="<td style='padding-bottom: 5px; padding-right:30px'>"
				  +p[f][c]+"</td>";
			sf+=p[f][c];
			sc+=p[c][f];
		}
		if(m) txt+="<td>"+sf+"/"+sc+"</td>";
		txt += "</tr>";
	}
	txt += "</table>";
	return txt;
}

//-----------Triqui Inicio----------------

const c1 = document.querySelector("#c1");
c1.addEventListener("click", function(){jugar(1);});
const c2 = document.querySelector("#c2");
c2.addEventListener("click", function(){jugar(2);});
const c3 = document.querySelector("#c3");
c3.addEventListener("click", function(){jugar(3);});
const c4 = document.querySelector("#c4");
c4.addEventListener("click", function(){jugar(4);});
const c5 = document.querySelector("#c5");
c5.addEventListener("click", function(){jugar(5);});
const c6 = document.querySelector("#c6");
c6.addEventListener("click", function(){jugar(6);});
const c7 = document.querySelector("#c7");
c7.addEventListener("click", function(){jugar(7);});
const c8 = document.querySelector("#c8");
c8.addEventListener("click", function(){jugar(8);});
const c9 = document.querySelector("#c9");
c9.addEventListener("click", function(){jugar(9);});

var jg = [["", "#ffffff", "#ffffff"],
		 ["X", "#ffff00", "#0000ff"],
		 ["O", "#ffffff", "#ff0000"]];
var player = 1;
inicia();
function inicia(){
	let tf = document.getElementById("lefi");
	tf.innerHTML = "";
	player = 1;
	for(let i=1;i<=9;i++) pinc(i,0);
}
function jugar(n){
	let btn = document.getElementById("c"+n).innerHTML;
	if(btn==""){
		pinc(n,player);
		validar(player);
		if(player==1) player=2;
		else player=1;
	}
}
function validar(pl){
	let flag = false;
	let v = ["","","","","","","","",""];
	let jv = jg[pl][0]+jg[pl][0]+jg[pl][0];
	v[0] = c1.innerHTML+c2.innerHTML+c3.innerHTML;
	v[1] = c4.innerHTML+c5.innerHTML+c6.innerHTML;
	v[2] = c7.innerHTML+c8.innerHTML+c9.innerHTML;
	v[3] = c1.innerHTML+c4.innerHTML+c7.innerHTML;
	v[4] = c2.innerHTML+c5.innerHTML+c8.innerHTML;
	v[5] = c3.innerHTML+c6.innerHTML+c9.innerHTML;
	v[6] = c1.innerHTML+c5.innerHTML+c9.innerHTML;
	v[7] = c3.innerHTML+c5.innerHTML+c7.innerHTML;
	for(let r=0;r<8;r++){
		if(v[r]==jv){
			pinlt(pl);
			flag = true;
			r=8;
		}
	}

	let h = c1.innerHTML+c2.innerHTML+c3.innerHTML+
			c4.innerHTML+c5.innerHTML+c6.innerHTML+
			c7.innerHTML+c8.innerHTML+c9.innerHTML;
	
	if(h.length>=9 && flag==false){
		pinlt(0);
	}
}

function pinlt(n){
	let tf = document.getElementById("lefi");
	if(n!=0){
		tf.innerHTML = "Ganó Jugador "+n+" - "+jg[n][0];
		tf.style.textShadow = "0px 0px 5px #ffffff, "+
							  "0px 0px 5px #ffffff, "+
							  "0px 0px 7px "+jg[n][2]+", "+
							  "0px 0px 7px "+jg[n][2]+", "+
							  "0px 0px 7px "+jg[n][2];
	}else{
		tf.innerHTML = "Empate X(1) - O(2)";
		tf.style.textShadow = "0px 0px 5px #bbbbbb, "+
							  "0px 0px 5px #bbbbbb, "+
							  "0px 0px 5px #bbbbbb";
	}
}

function pinc(n,j){
	let btn = document.getElementById("c"+n);
	btn.innerHTML =jg[j][0];
	btn.style.color = jg[j][1];
	btn.style.backgroundColor = jg[j][2];
}

//-----------Triqui Fin----------------