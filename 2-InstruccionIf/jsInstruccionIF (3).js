function mostrar()
{
//tomo la edad  
	var edad1;

	edad1=document.getElementById('edad').value;

	edad1=parseInt(edad1);

	if (edad1>17) {
		alert("Tu edad es : " + edad1 + " y sos mayor de edad.")} 
		

		else {
			alert("Tu edad es : " + edad1 + " y sos menor de edad." )}

}//FIN DE LA FUNCIÓN