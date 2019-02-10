/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo1;
	var aumento;
	var resultado1;

	sueldo1=document.getElementById('sueldo').value;

	sueldo1=parseInt(sueldo1)

	aumento = sueldo1 * 10 / 100;

	resultado1 = sueldo1 + aumento;

	document.getElementById('resultado').value=resultado1;




}
