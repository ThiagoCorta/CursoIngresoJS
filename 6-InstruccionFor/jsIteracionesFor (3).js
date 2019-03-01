function mostrar()
{

	var numeroIngresado;
	var numeroAnterior;
	var acumuladorDivisores;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	acumuladorDivisores=0;

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior--)
	{
		console.log(numeroAnterior);
		if(numeroIngresado%numeroAnterior==0)
		{
			acumuladorDivisores=acumuladorDivisores+numeroAnterior;
			
		}
	}

	if(acumuladorDivisores==numeroIngresado)
		{
			console.log("Es perfecto");
		}
		else
		{
			console.log("No es perfecto");
		}

// numeros perfectos
}//FIN DE LA FUNCIÓN