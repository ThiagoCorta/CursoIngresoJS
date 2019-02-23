function mostrar()
{
	var contador;
	var notas;
	var sexo;
	var acumulador;
	var promedioT;
	var maximo;
	var minimo;
	var cantidadM;


	contador=0;
	acumulador=0;

	notas=prompt("ingresa las notas " + contador + "# =");
	sexo=prompt("Ingresar el sexo de los alumnos F O M"+ contador + "# =")
	
	notas=parseInt(notas);

	while(contador<5)
	{
		acumulador=acumulador+1;
		contador=contador+1;
		
		notas=prompt("ingresa las notas " + contador + "# =");
		sexo=prompt("Ingresar el sexo de los alumnos F O M"+ contador + "# =")
		
		
		if(notas<0 || notas>10)
		{
			notas=prompt("ingresa las notas entre 0 y 10");
			

		}
		else
		{
			if(sexo!="f" && sexo!="m")
			{
			sexo=prompt("Ingresa un sexo valido")
			
			}

		}
		
		if(contador==1)
		{
			nota=maximo;
			nota=minimo;
		}
		else
		{
			if(notas>maximo)
			{
			maximo=numero;
			}
			if(notas<minimo)
			{
			minimo=numero+sexo;
			}
		}
		promedio=notas/contador;

		alert()

	}
}
