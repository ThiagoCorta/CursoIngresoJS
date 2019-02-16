function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroSecreto;
	var mensaje;

	numeroSecreto=Math.floor((Math.random() * 10) + 1);

	if (numeroSecreto>8)
	{
		mensaje="EXCELENTE. Su nota es: "+numeroSecreto;
	}

	else 
	{
		if (numeroSecreto>3)
		{
			mensaje="APROBO. Su nota es: "+numeroSecreto;
		}

		else //(numeroSecreto<4) 
		{
			mensaje="Vamos, la proxima se puede. Su nota es: "+numeroSecreto;
		}

	}	

	alert(mensaje);
	console.log(numeroSecreto);

}//FIN DE LA FUNCIÓN