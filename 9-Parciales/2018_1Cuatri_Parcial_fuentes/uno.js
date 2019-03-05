
function mostrar()
{

	var ancho;
	var largo;
	var perimetro;
	var suma;


	ancho=prompt("Ingresar ancho de un rectangulo");
	largo= prompt("Ingresar largo de un rectangulo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	suma=ancho+largo;
	perimetro=2*suma;

	alert("El perimetro del rectangulo es :" + perimetro)
	

}
