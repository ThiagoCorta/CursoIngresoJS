function mostrar()
{

	var precio;
	var porcentaje;
	var descuento;
	var preciofinal;

	precio=prompt("Ingrese el precio de su producto");
	porcentaje=prompt("Ingrese el descuento de su producto");

	descuento=precio*porcentaje/100;

	preciofinal=precio - descuento;

	document.getElementById('elPrecioFinal').value=preciofinal;


}
