function mostrar()
{
	var velocidad;
	var combustible;
	var cantidadVelocidades;
	var acumuladorVelocidades;
	var acumuladorCombustible;
	var velocidadMayor;
	var velocidadMenor;
	var combustibleMayor;
	var combustibleMenor;
	var contador;
	var promedio;
	var liquidosMayor100;
	var velocidadAltaSolido;

	cantidadVelocidades=5;
	contador=0;
	acumuladorVelocidades=0;
	acumuladorCombustible=0;
	liquidosMayor100=0;
	velocidadAltaSolido=0;


	while(contador<cantidadVelocidades)
	{
		velocidad=prompt("Ingresar velocidad entre 0 y 250KM");
		velocidad=parseInt(velocidad);
		

		while(velocidad<0 || velocidad>250)
		{
			velocidad=prompt("Error, ingresar velocidad entre 0 y 250KM");
			velocidad=parseInt(velocidad);

		}

		contador=contador+1;
		acumuladorVelocidades=acumuladorVelocidades+velocidad;

		combustible=prompt("Ingresar tipo de combustible s (solido) o l (liquido)");
		

		while(combustible!="s" && combustible!="l")
		{
			combustible=prompt("Error, ingresar tipo de combustible s (solido) o l (liquido)");
		}

		acumuladorCombustible++;

		promedio=acumuladorVelocidades/cantidadVelocidades;

		if(contador==1)
		{
			velocidadMenor=velocidad;
			velocidadMayor=velocidad;
			combustibleMayor=combustible;
			combustibleMenor=combustible;
			
			if(combustible="s")
			{
				velocidadAltaSolido=velocidad;
			}

		}
		else
		{
			if(velocidad>velocidadMayor)
			{
				velocidadMayor=velocidad;
				combustibleMayor=combustible;
				velocidadAltaSolido=velocidad;
			}	
			else
			{
				velocidadmenor=velocidad;
				combustibleMenor=combustible;

			}

		}

		if(combustible=="l" && velocidad>100)
		{
			liquidosMayor100=liquidosMayor100+1;
		}

	
	}	

	document.write("El promedio de las velocidades totales: " + promedio+ "<br>"+
					"La velocidad mas baja y su tipo de combustible: " + velocidadmenor+ " " + combustibleMenor+ "<br>"+
					"La cantidad de combustibles liquidos que su velocidad supera 100: "+ liquidosMayor100+ "<br>"+
					"La velocidad mas alta de los combustibles solidos : " + velocidadAltaSolido)


}
