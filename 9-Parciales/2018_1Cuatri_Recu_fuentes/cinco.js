function mostrar()
{
	var habitacion;
	var descuento;
	var porcen;
	var pago;
	var precio;
	var paquete;


	habitacion=prompt("Precio de tu habitacion?");
	pago=prompt("Elegi el tipo de pago: Visa, Paypal, MercadoPago, efectivo u otro metodo.");
	paquete=prompt("Elegi tu paquete: todoincluido, soloDesayuno");
	
	habitacion=parseInt(habitacion);
	
	porcen=1

	
	switch(pago)
	{
		case "visa":
			porcen=10;
			break

	
		case "paypal":
			switch(paquete)
			{
				case "todoincluido":
				porcen=25;
				break

				default:
					porcen=15;
			 
			}

		case "mercadopago":
			porcen=10;
			break


		case "efectivo":
			switch(paquete)
			{
				case "solodesayuno":
				porcen=30;
				break

				case "todoincluido":
				porcen=35;
				break

				default:
					porcen=20;
					break;
			}
			

		default:
			porcen=5
			break;
	}	



	 
	
	descuento=habitacion * porcen / 100;
	precio=habitacion-descuento;
	alert(precio);

}
