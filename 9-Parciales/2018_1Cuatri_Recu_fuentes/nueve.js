function mostrar()
{
	//cargar series de celular, cada ves qnos cargan un celular pedir: Marca 
	//Pedirle el tamaño es un numero tamaño pantalla o pulgadas
	//Pedir precio
	//1- saber el mayor precio y la marca
	//2-

	var celularMarca;
	var celularTamaño;
	var celularPrecio;
	var celularPrecioMayor;
	var celularPrecioMenor;
	var celularMarcaMayor;
	var celularMarcaMenor;
	var celularPantallaMayor;
	var celularPantallaMenor;
	var contadorCelulares;
	var respuesta;
	var acumuladorPromedio;
	var promedios;
	var celularesMayor2000;
	var primeroCelular1000;


	celularPrecioMayor=0;
	celularPrecioMenor=0;
	celularPantallaMayor=0;
	celularPantallaMenor=0;
	celularMarcaMenor= " "
	celularMarcaMayor= " "
	contadorCelulares=0;
	respuesta="si";
	acumuladorPromedio=0;
	celularesMayor2000=0;


	while(respuesta=="si")
		{
			celularMarca=prompt("Ingresar la marca de tu celular lg - s - i");
			contadorCelulares++;

			while(celularMarca!="lg" && celularMarca!="s" && celularMarca!="i")
			{
			celularMarca=prompt("Error, Ingresar la marca de tu celular lg o s o i");
			}

			celularPrecio=prompt("Ingresar el precio del celular");
			celularPrecio=parseInt(celularPrecio)
			acumuladorPromedio=acumuladorPromedio+celularPrecio;

			while(celularPrecio<0 || celularPrecio>9999)
			{
				celularPrecio=prompt("Error, ingresar el precio del celular");
			}


			celularTamaño=prompt("Ingresar el tamaño de tu celular en CM")

			while(celularTamaño<0 || celularTamaño>10)
			{
				celularTamaño=prompt("Error, Ingresar el tamaño de tu celular en CM")
			}

			respuesta=prompt("Si para seguir")

			while(respuesta!="si")
			{
				break;
			}

			if(contadorCelulares==1)
			{
				celularPrecioMenor=celularPrecio;
				celularPrecioMayor=celularPrecio;
				celularMarcaMayor=celularMarca;
				celularMarcaMenor=celularMarca;
				celularPantallaMenor=celularTamaño;
				celularPantallaMayor=celularTamaño;
			}
			else
			{
				if (celularPrecioMayor>celularPrecio)
				{
					celularPrecioMayor=celularPrecio;
					celularMarcaMayor=celularMarca
					celularPantallaMayor=celularTamaño;
				}
				else
				{
					celularPrecioMenor=celularPrecio;
					celularPantallaMenor=celularTamaño;
					celularMarcaMenor=celularMarca;
				}
			}

			if(celularPrecio>2000)
			{
			celularesMayor2000++;
			}
			else
			{
				if(celularMarca==)
			}

		}

		promedio=acumuladorPromedio/contadorCelulares;

				
		document.write("Promedio de precios: " + promedio+ "<br>"+
			"Cantidad de celulares que valen mas de 2000: "+ celularesMayor2000+ "<br>"+
			"Precio marca y tamaño del mas caro: " + celularPrecioMayor + " " + celularMarcaMayor + " " + celularPantallaMayor+ "<br>"+
			"Precio marca y tamaño del mas barato: " + celularPrecioMenor+ " " + celularMarcaMenor+ " " + celularPantallaMenor)

}
