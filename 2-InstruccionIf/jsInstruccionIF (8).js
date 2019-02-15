function mostrar()
{
//tomo la edad  

	
	var edad1;
	var ecivil;

	edad1=document.getElementById('edad').value;
	ecivil=document.getElementById('estadoCivil').value;

	if(edad1<18 && ecivil != "Soltero") 
	{

	}
	else
	{
		if(edad1>17 && ecivil == "Soltero")
		{
		alert("Es soltero y no es menor")
		}
	}
}//FIN DE LA FUNCIÓN