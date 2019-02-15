function mostrar()
{
//tomo la edad  
	var edad1;
	var mensaje;
	
	edad1=document.getElementById('edad').value;
	edad1=parseInt(edad1);


	if (edad1>17)
	{
		mensaje="Es mayor de edad";
	}
	else
	{

		if(edad1<13)
		{
			mensaje="Es menor de edad";
		}
		else
		{
			mensaje="sos adolescente";
		}


	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN