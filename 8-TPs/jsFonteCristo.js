/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

	var numeroIngresado;
 	var numPares;
 	var numImpares;
 	var numDivisibles;
 	var mensaje;
 	var contador;
 	var total;
 	var divisor;



function ComenzarIngreso () 
{

 	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	contador=0;

}

function NumerosPares ()
{

 	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	contador=0;
 	total =0;
 	while(contador < numeroIngresado)
	{
		contador=contador+1;
		
		if(contador%2==0)
		{	
			console.log("Par: " + contador);
			total=total+1;
		}
 	}

 	alert("Total de num pares: " + total);
 	


}

function NumerosImpares ()
{


 	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);

 	contador=0;
 	total =0;
 	while(contador < numeroIngresado)
	{
		contador=contador+1;
		
		if(contador%2!=0)
		{
			console.log("impar" + contador)
			total=total+1;
		}
 	}
 	
 	alert("Total de num impares: " + total);

}

function NumerosDivisibles ()
{


 	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);

 	contador=0;
 	total =0;
 	divisor= "";
 	while(contador < 100)
	{
		contador=contador+1;
		
		if(contador % numeroIngresado ==0)
		{
			console.log("Divisible: " + contador + "|| cont " + contador + " % num " + numeroIngresado + " = " + (contador % numeroIngresado));
			total=total+1;
			divisor =contador + " ";
		}
 	}
 	alert("Del 1-100. Divisibles por " + numeroIngresado + " = " + total + " | Son:" + divisor);
}

