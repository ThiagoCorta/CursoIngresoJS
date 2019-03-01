function mostrar()
{
	var paises;
	var superficie;
	var superficieImpar;
	var superficieMenor100;
	var superficieIgual100;
	var respuesta;
	var primerPaisSupero100;
	var paisMenorSuperficie;
	var paisMenorSuperficieNombre;
	var promedioKmIngresado;
	var contador;
	var acumuladorSuperficie;

	contador=0;
	superficieImpar=0;
	superficieMenor100=0;
	respuesta="si";
	superficieIgual100=0;
	acumuladorSuperficie=0;
	primerPaisSupero100=0;


	while(respuesta=="si")
	{
		paises=prompt("Ingresar un pais")

		superficie=prompt("Ingresar superficie en KM")
		superficie=parseInt(superficie);

		while(superficie<0 || superficie>99999)
		{
			superficie=prompt("Ingresar superficie valida en KM")
			superficie=parseInt(parseInt);
		}

		acumuladorSuperficie=acumuladorSuperficie+superficie;
		contador=contador+1;

		respuesta=prompt("Si para seguir");

		while(respuesta!="si")
		{
			break;
		}

	}


	if(superficie%2==1)
	{
		superficieImpar=superficieImpar+1;
	}
	
	
		if(superficie<100)
		{
			superficieMenor100=superficieMenor100+1;
		}
		else
		{
			if(superficie==100)
			{
				superficieIgual100=superficieIgual100+1;
			}
		}

		if(contador==1)
		{
			paisMenorSuperficie=superficie;
			paisMenorSuperficieNombre=pais;

		}
		else
		{
			if(superficie<paisMenorSuperficie)
			{
				paisMenorSuperficie=superficie;
				paisMenorSuperficieNombre=pais;
			}
		}
	

	promedioKmIngresado=acumuladorSuperficie/contador;

	document.write("La cantidad de paises con superficie impar : " + superficieImpar + "<br>"+
					"La cantidad de paises con superficie menor a 100: " + superficieMenor100 + "<br>"+
					"La cantidad de paieses con superficie igual a 100 : " + superficieIgual100 + "<br>"+
					"El nombre del primer pais que supero 100km de superficie " + primerPaisSupero100+ "<br>"+
					"El promedio de KM ingresados: " + promedioKmIngresado + "<br>" + 
					"El nombre del pais con menor territorio " + paisMenorSuperficieNombre)






}
