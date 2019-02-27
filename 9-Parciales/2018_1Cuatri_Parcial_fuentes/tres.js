function mostrar()
{

	var precio;
	var descuento;
	var porcentaje;
	var final;

	precio=prompt("Ingresar precio");
	porcentaje=prompt("Ingresar descuento");

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;
	final=precio-descuento;

	document.getElementById('elPrecioFinal').value=final;



}
