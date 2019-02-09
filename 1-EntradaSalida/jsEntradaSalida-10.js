/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe1;
	var descuento;
	var resultado1;

	importe1=document.getElementById('importe').value;

	importe1=parseInt(importe1);

	descuento = importe1 * 25 / 100;

	resultado1 = importe1 - descuento;

	document.getElementById('resultado').value=resultado1;


}
