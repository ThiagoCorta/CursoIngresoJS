function mostrar()
{
//tomo la edad  
	var edad1;
	var mensaje;

	edad1=document.getElementById('edad').value;
	edad1=parseInt(edad1);

	if (edad1>12 && edad1<17) 
	{	
		
		mensaje=("Tu edad es: " + edad1 + " y sos adolescente")
	} 

	else 
	{

		mensaje=("Tu edad es: " + edad1);
	}

	alert(mensaje)


}//FIN DE LA FUNCIÓN