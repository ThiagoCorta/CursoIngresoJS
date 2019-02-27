function mostrar()
{

	var alumnoNota;
	var alumnoSexo;
	var cantidadAlumnos;
	var contador;
	var totalNotas;
	var promedioNotas;
	var notaMasBaja;
	var notaMasAlta;
	var notaMasBajaSexo;
	var varonSupera6;

	cantidadAlumnos=5;
	contador=0;
	varonSupera6=0;
	totalNotas=0;

	while(contador<cantidadAlumnos)
	{
		alumnoNota=prompt("Ingresar la nota del alumno");
		alumnoNota=parseInt(alumnoNota);
		contador=contador+1;
		totalNotas=totalNotas+alumnoNota;


		while(alumnoNota<0 || alumnoNota>10)
		{
			alumnoNota=prompt("Error, ingresar nota de 0 a 10");
			alumnoNota=parseInt(alumnoNota);
			contador=contador+1;
		}

		alumnoSexo=prompt("Ingresar sexo del alumno f O m");
		

		while(alumnoSexo!="f" && alumnoSexo != "m")
		{
			alumnoSexo=prompt("Error, ingresar sexo valido f O m");
			contador=contador+1;

		}

		if(contador==1)
		{
		notaMasAlta=alumnoNota;
		notaMasBaja=alumnoNota;
		notaMasBajaSexo=alumnoSexo;
		}
		else
		{
			if(alumnoNota<notaMasBaja)
			{
			notaMasBaja=alumnoNota;
			notaMasBajaSexo=alumnoSexo;		}
				else
				{
			notaMasAlta=alumnoNota;
				}
			
		}

		if(alumnoNota>5 && alumnoSexo=="m")
			{
				varonSupera6=varonSupera6+1;
			}
	}

		

		promedioNotas=totalNotas/cantidadAlumnos;

		alert("Promedio total = " + promedioNotas + " Nota mas baja y sexo = "+ notaMasBaja + " " + notaMasBajaSexo+ 
			" Cantidad de varones con nota mayor o igual a 6 = " + varonSupera6)


}





