function mostrar()
{
//tomo la edad  
	var edad1;
	var mensaje;
	edad1=document.getElementById('edad').value;
	edad1=parseInt(edad1);

	if (edad1>17) 
	{
		mensaje=("Tu edad es : " + edad1 + " y sos mayor de edad.");

	} 
		

	else 
	{
			mensaje=("Tu edad es : " + edad1 + " y sos menor de edad.");
	}

	alert(mensaje)

}//FIN DE LA FUNCIÓN