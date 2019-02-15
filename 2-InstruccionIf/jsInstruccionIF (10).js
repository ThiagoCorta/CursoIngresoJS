function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroSecreto;
	var mensaje;

	numeroSecreto=Math.floor((Math.random() * 10) + 1);

	if (numeroSecreto<11 && numeroSecreto>8)
	{
		mensaje="EXCELENTE"
	}

	else 
	{
		if (numeroSecreto<9 && numeroSecreto>3)
		{
			mensaje="APROBO"
		}

		if (numeroSecreto<4) 
		{
			mensaje="Vamos, la proxima se puede"
		}

	}	

	alert("Su nota es: "+numeroSecreto+ " " + mensaje);

}//FIN DE LA FUNCIÓN