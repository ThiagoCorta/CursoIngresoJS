function mostrar()
{
	var marca;
	var peso;
	var precio;
	var temperatura;
	var contador;
	var respuesta;
	var contadorTemperaturasPares;
	var contadorTemperaturasMenor0;
	var AcumuladorPesoProductos;
	var promedioProductos;
	var pesoMaximo;
	var pesoMinimo;
	var marcaMasPesado;

	contador=0;
	respuesta="si";
	contadorTemperaturasPares=0;
	contadorTemperaturasMenor0=0;
	AcumuladorPesoProductos=0;


	while(respuesta=="si")
	{
		marca=prompt("Ingresar la marca del producto");

		peso=prompt("Ingresar el peso del producto");
		peso=parseInt(peso);

		while(peso<1 || peso>100)
		{
			peso=prompt("Error, ingresar el peso del producto entre 1 y 100");
			peso=parseInt(peso);
		}

		temperatura=prompt("Ingresar la temperatura de almacenamiento del producto");
		temperatura=parseInt(temperatura);

		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Error, ingresar la temperatura de almacenamiento del producto entre -30 a 30");
			temperatura=parseInt(temperatura);
		}

		contador=contador+1;
		AcumuladorPesoProductos=AcumuladorPesoProductos+peso;

		respuesta=prompt("Ingresar si para continuar")

		while(respuesta!="si")
		{
			break;
		}

		

		if(temperatura%2==0 && temperatura!=0)
		{
			contadorTemperaturasPares=contadorTemperaturasPares+1;
		}
		
			if(temperatura<0)
			{
				contadorTemperaturasMenor0=contadorTemperaturasMenor0+1;
			}
		

			if(contador==1)
			{
				pesoMinimo=peso;
				pesoMaximo=peso;
				marcaMasPesado=marca;
			}
			else
			{
				if(peso>pesoMaximo)
				{
					pesoMaximo=peso;
					marcaMasPesado=marca;
				}
				else
				{
					if(peso<pesoMinimo)
					{
						pesoMinimo=peso;
					}
				}
			}
	}

	promedioProductos=AcumuladorPesoProductos/contador;

	document.write("La cantidad de temperaturas pares:= " + contadorTemperaturasPares + "<br>"+
					"La marca del producto mas pesado:= " + marcaMasPesado + "<br>"+
					"La cantidad de productos que se conservan a menos 0 grados:= " + contadorTemperaturasMenor0 + "<br>"+
					"El promedio del peso de todos los productos:= "+ promedioProductos + "<br>"+
					"El peso maximo:= " + pesoMaximo + "<br>"+
					"El peso minimo:= " + pesoMinimo)



}
