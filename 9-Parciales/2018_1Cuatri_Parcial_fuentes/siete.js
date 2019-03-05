function mostrar()
{

	var alumnoNota;
	var alumnoSexo;
	var cantidadAlumnos;
	var acumuladorNotas;
	var notaMasBaja;
	var notaMasBajaSexo;
	var cantidadHombresMayor6;
	var contador;
	var promedio;

	acumuladorNotas=0;
	cantidadAlumnos=5;
	cantidadHombresMayor6=0;
	contador=0;


	while(contador<cantidadAlumnos)
	{
		alumnoNota=prompt("Ingresar la nota del alumno")
		alumnoNota=parseInt(alumnoNota);

		while(alumnoNota<0 || alumnoNota>10)
		{
			alumnoNota=prompt("Error, Ingresar la nota del alumno de 0 a 10")
			alumnoNota=parseInt(alumnoNota);
		}


		alumnoSexo=prompt("Ingresar el sexo del alumno sea F o M")

		while(alumnoSexo!="f" && alumnoSexo!="m")
		{
			alumnoSexo=prompt("Error, ingresar el sexo del alumno sea F o M")
		}


		if(contador==1)
		{
			notaMasBaja=alumnoNota;
			notaMasBajaSexo=alumnoSexo;
		}
		else
		{
			if(alumnoNota<notaMasBaja)
			{
				notaMasBaja=alumnoNota;
				notaMasBajaSexo=alumnoSexo;
			}
		}

		if(alumnoNota>=6 && alumnoSexo=="m")
		{
			cantidadHombresMayor6=cantidadHombresMayor6+1;
		}

		contador=contador+1;
		acumuladorNotas=acumuladorNotas+alumnoNota;

	}

	promedio=acumuladorNotas/cantidadAlumnos;

	alert("El promedio de las notas totales:= " + promedio + 
			"La nota mas baja y el sexo de esa persona:= " + notaMasBaja + " " + notaMasBajaSexo + 
			"La cantidad de varones con nota mayor o igual a 6 := " + cantidadHombresMayor6)


}


/*pruebo con
7 m
7 f
5 m
5 f
1 m
1 f
*/





