/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//aumento = sueldo * 10 / 100
	var importe;
	var aumento;
	var resultado1;
	
	importe=document.getElementById('sueldo').value;

	importe=parseInt(importe);
	//aumento=parseInt(aumento);

	aumento = importe * 10 / 100;

	resultado1 = importe + aumento;

	document.getElementById('resultado').value=resultado1;



}
