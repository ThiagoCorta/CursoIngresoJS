/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
 	var resultado;
 	var suma;


	document.getElementById('numeroUno').value=numero1;

	document.getElementById('numeroDos').value=numero2;

	//numeroUno.value=numero1;
	//numeroDos.value=numero2;

	var numero1 = parseInt("500");

	var numero2 = parseInt("250");

 	//numero1=numeroUno.value;
 	//numero2=numeroDos.value;

	var resultado = numero1 + numero2 

	var suma = "La suma es "

 	//alert(suma.concat(resultado);
 	alert(suma.concat(resultado))
}

