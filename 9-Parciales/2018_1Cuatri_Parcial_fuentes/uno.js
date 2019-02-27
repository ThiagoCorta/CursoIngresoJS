
function mostrar()
{

	var ancho
	var largo
	var perimetro


	ancho=prompt("Ingresar ancho de un rectangulo");
	largo= prompt("Ingresar largo de un rectangulo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=2*ancho+largo;

	alert("El perimetro del rectangulo es :" + perimetro)
	

}
