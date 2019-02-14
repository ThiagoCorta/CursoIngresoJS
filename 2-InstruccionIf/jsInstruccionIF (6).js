function mostrar()
{
//tomo la edad  
	var edad1;

	edad1=document.getElementById('edad').value;

	edad1=parseInt(edad1);


	if (edad1>17) {

		(alert("Tu edad es: " + edad1 + " y sos mayor de edad."))
	} 

	if (edad1>12 && edad1<17) {
		alert("Tu edad es: " + edad1 + " y sos adolescente.")

	} 

	if (edad1<13) {

		alert("Tu edad es: " + edad1 + " y sos un niño")
	}





}//FIN DE LA FUNCIÓN