function mostrar()
{
	// mostrar el num mayor
	//desc 10% si es mayor q 100 se muestra eso de la suma total.
	// mayor q 50 5% de desc
	// debajo de 50 tiene q pagar un 15% mas

	var precio1;
	var precio2;
	var precio3;
	var precio4;
	var suma;
	var descuento;
	var preciofinal;
	var preciofinal1;
	var mensaje;
	var porcen;

	precio1=prompt("Decime el precio 1");
	precio2=prompt("Decime el precio 2");
	precio3=prompt("Decime el precio 3");
	precio4=prompt("Decime el precio 4");

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);
	precio4=parseInt(precio4);

	suma=precio1 + precio2 + precio3 + precio4;
	porcen=1;
	

	if(precio1> precio2 && precio3 && precio4)
	{
		mensaje=precio1
	}
	else
	{
		if (precio2> precio3 && precio4)
		{
			mensaje=precio2
		}

			else
			{
				if (precio3> precio4)
			{
				mensaje=precio3
			}
				else 
				{
					mensaje=precio4
				}
			}

			
	}

	
	

	if (suma>99)
	{
		porcen=10;
		
	}

	else
	{
		if (suma>49)
		{
			porcen=5;
			
			
		}
		
			else
			{
				porcen= -15;
				
			}
	
	}	

	descuento= suma * porcen / 100;
	preciofinal= suma-descuento;
	

	
	
	

	alert("El numero mayor es " + mensaje + " El numero final es:" +preciofinal);

}
