function mostrar()
{
	var numero1;
	var numero2;
	var mensaje;
	var suma;
	var resta;


	numero1=prompt("Ingresar numero 1");
	numero2=prompt("Ingresar numero 2");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		mensaje=numero1 + " " + numero2;
	}
	else
	{
		if(numero1>numero2)
		{
			resta=numero1-numero2
			mensaje=resta
		}
		else
		{
			suma=numero1+numero2;
			mensaje=suma

		}

			if(numero1+numero2>=10)
			{
				suma=numero1+numero2;
				mensaje="La suma es " + suma + " y supero el 10";
			}

	}

	alert(mensaje);
}
