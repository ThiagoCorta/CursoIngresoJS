function mostrar()
{

	var contador;
	var maximo;
	var minimo;
	var numero;
	var respuesta;
	var bandera;
	// declarar variables

	bandera="Es la primera";
	respuesta="si";
	//maximo= -999;
	//minimo= 999;
	contador=0;

	while(respuesta=="si")
	{
		contador=contador+1;
		
		numero=prompt("Ingrese el numero" +contador+"# :"); // si pongo esto antes del contador va a sumar de 0 a 4 y no 1 a 5
		
		numero=parseInt(numero);

		//if(bandera=="Es la primera") // agregando la bandera funciona para absolutamente todo y no solo -999 y 999.
		//{
		//	maximo=numero;
		//	minimo=numero;
		//	bandera="lalala";
		//}
		//else
		//{
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;

		}
		else
		{
			if(numero>maximo)
			{
			maximo=numero;
			}
			if(numero<minimo)
			{
			minimo=numero;
			}
		}
		

		//acumulador=acumulador+numero;

		respuesta=prompt("=> Si para continuar");

	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN