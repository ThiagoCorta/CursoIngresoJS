function mostrar()
{
//tomo la edad  
	

	var edad1;
	var ecivil;

	edad1=document.getElementById('edad').value;
	ecivil=document.getElementById('estadoCivil').value;
	

	if (edad1<18 && ecivil != "Soltero") 

	{
		alert("Sos muy chico para NO ser soltero");
	}



	



}
//FIN DE LA FUNCIÓN