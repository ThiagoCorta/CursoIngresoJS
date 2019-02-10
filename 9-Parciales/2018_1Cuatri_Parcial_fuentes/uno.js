
function mostrar()
{


	var base;
	var altura;
	var suma;
	var resultado;

	base=prompt("Ingrese la base del rectangulo en CM");
	altura=prompt("Ingrese la altura del rectangulo en CM");

	base=parseInt(base);
	altura=parseInt(altura);

	suma=base+altura;
	resultado= 2 * suma; 


	alert("El perimetro del rectango es: " + resultado + " cm2")

}
