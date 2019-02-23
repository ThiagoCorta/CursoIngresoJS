function mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notaBaja;
	var notaAlta;
	var notaBajaSexo;
	var cantidadM;
	var contador;
	var cantidadAlumnos;
	var totalNotas;
	var hombresNota6;

	cantidadAlumnos=5;
	contador=0;
	totalNotas=0;
	hombresNota6=0;

	while(contador < cantidadAlumnos)
	{
		nota=prompt("Ingresa las notas de los alumnos");
		nota=parseInt(nota);
		contador=contador+1;
		
		while(nota <= 0 || nota >= 11)
		{
			nota=prompt("Error, ingresa las notas de los alumnos del 1 a 10");
			nota=parseInt(nota);
			break;
		}
		
		sexo=prompt("Ingresar sexo de los alumnos F O M")
	
		while(sexo != "f" && sexo != "m")
		{
			sexo=prompt("Error ingresar sexo de los alumnos F O M")
			contador=contador+1;
			break;
		}

		//promedio
		totalNotas=totalNotas+nota;

		//nota mas baja
		if(contador==1)
		{
			notaBaja=nota;
			notaAlta=nota;
			notaBajaSexo=sexo;
		}
		else
		{
			if (nota>notaAlta) 
			{
				
				notaAlta=nota;
				notaBajaSexo=sexo;
			}
			else
			{
				if(nota<notaBaja)
				{
					notaBaja=nota;
					notaBajaSexo=sexo;
				}
			}
		}

		//hombres con nota + 6

		if(sexo=="m" && nota>=6)
		{
			hombresNota6=hombresNota6+1;
		}
	
	}

		promedio=totalNotas/cantidadAlumnos;

		alert("El promedio de las notas es : " + promedio + " "+
			"La nota mas baja y el sexo de ese alumno: " +notaBaja + " " + notaBajaSexo+ " "+
			"La cantidad de varones que su nota fue mayor o igual a 6: " +hombresNota6)
	
}