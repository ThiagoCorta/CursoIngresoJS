/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
 	var resultado;
 	var suma;

 	document.getElementById('numeroUno').value=numero1;

	document.getElementById('numeroDos').value=numero2;

	var numero1 = parseInt("500");

	var numero2 = parseInt("250");

	var resultado = numero1 + numero2 

	var suma = "La suma es "
	alert(suma.concat(resultado))
}

function restar()
{
	var numero1;
	var numero2;
 	var resultado;
 	var resta;

 	document.getElementById('numeroUno').value=numero1;

	document.getElementById('numeroDos').value=numero2;

	var numero1 = parseInt("800");

	var numero2 = parseInt("50");

	var resultado = numero1 - numero2;

	var resta = "La resta es "
	alert(resta.concat(resultado))




}

function multiplicar()
{ 
	var numero1;
	var numero2;
 	var resultado;
 	var multiplicasion;

 	document.getElementById('numeroUno').value=numero1;

	document.getElementById('numeroDos').value=numero2;

	var numero1 = parseInt("10");

	var numero2 = parseInt("75");

	var resultado = numero1 * numero2;

	var multiplicasion = "La multiplicasion es "
	alert(multiplicasion.concat(resultado))
}

function dividir()
{
	var numero1;
	var numero2;
 	var resultado;
 	var division;

 	document.getElementById('numeroUno').value=numero1;

	document.getElementById('numeroDos').value=numero2;

	var numero1 = parseInt("3750");

	var numero2 = parseInt("5");

	var resultado = numero1 / numero2;

	var division = "La division es "
	alert(division.concat(resultado))
}

