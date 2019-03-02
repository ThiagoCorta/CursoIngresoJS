function mostrar()

/*Realizar el algoritmo que permita ingresar la marca de la marca de la gaseosa,la/cantidad de litros (validar entre 1 litro, 2 litros y 3 litros), el precio el cual debe ser
entre 30 y 100 y
 por document.write:
a)La cantidad de precios pares.
b)La marca y litros del más barato
c)La cantidad de gaseosas que valen menos de 50.
d)El promedio del precio de todas las gaseosa.
f)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros.
*/


{
	var marcaGaseosa;
	var litrosGaseosa;
	var precioGaseosa;
	var contadorPares;
	var maximoMarcaGaseosa;
	var maximoLitroGaseosa;
	var maximoPrecioGaseosa;
	var minimoMarcaGaseosa;
	var minimoLitroGaseosa;
	var minimoPrecioGaseosa;
	var cantidadGaseosasMenor50;
	var acumuladorPrecio;
	var contadorGaseosa;
	var respuesta;
	var promedio;
	var precioMaximo3litros;
	var precioMinimo3litros;
	var contador3litros;

	contadorPares=0;
	cantidadGaseosasMenor50=0;
	acumuladorPrecio=0;
	contadorGaseosa=0;
	respuesta="si"
	contador3litros=0;


	while(respuesta=="si")
		{
			marcaGaseosa=prompt("Ingresar la marca de la gaseosa");
			litrosGaseosa=prompt("Ingresar litros de la gaseosa 1 2 o 3 litros")
			litrosGaseosa=parseInt(litrosGaseosa);

			while(litrosGaseosa<0 || litrosGaseosa>3)
			{
				litrosGaseosa=prompt("Error, ingresar litros de la gaseosa 1 2 o 3 litros")
				litrosGaseosa=parseInt(litrosGaseosa);

			}

			precioGaseosa=prompt("Ingresar el precio de las gaseosas")
			precioGaseosa=parseInt(precioGaseosa);

			while(precioGaseosa<30 || precioGaseosa>100)
			{
				precioGaseosa=prompt("Error ingresar el precio de las gaseosas")
				precioGaseosa=parseInt(precioGaseosa);
			}

			acumuladorPrecio=acumuladorPrecio+precioGaseosa;
			contadorGaseosa=contadorGaseosa+1;

			respuesta=prompt("Si para continuar")

			while(respuesta!="si")
			{
				break;
			}

			if(precioGaseosa%2==0)
			{
				contadorPares=contadorPares+1;
			}

			if(contadorGaseosa==1)
			{
				minimoPrecioGaseosa=precioGaseosa;
				maximoPrecioGaseosa=precioGaseosa;
				minimoLitroGaseosa=litrosGaseosa;
				maximoLitroGaseosa=litrosGaseosa;
				minimoMarcaGaseosa=marcaGaseosa;
				maximoMarcaGaseosa=marcaGaseosa;
			}
			else
			{
				if(precioGaseosa > maximoPrecioGaseosa)
				{
					maximoPrecioGaseosa=precioGaseosa;
					maximoLitroGaseosa=litrosGaseosa;
					maximoMarcaGaseosa=marcaGaseosa;
				}
				else
				{
					if(precioGaseosa<minimoPrecioGaseosa)
					{
						minimoMarcaGaseosa=marcaGaseosa;
						minimoLitroGaseosa=litrosGaseosa;
						minimoPrecioGaseosa=precioGaseosa;
					}
					
				}
					
					
			}
			if(precioGaseosa<50)
			{
				cantidadGaseosasMenor50=cantidadGaseosasMenor50+1;
			}


			if(contador3litros==0 && litrosGaseosa==3)
			{
				precioMinimo3litros=precioGaseosa;
				precioMaximo3litros=precioGaseosa;
				contador3litros++
			}
			else
			{
				if(precioGaseosa>precioMaximo3litros)
				{
					precioMaximo3litros=precioGaseosa;
				}
				else
				{
					precioMinimo3litros=precioGaseosa;
				}
			}

		}
		

		promedio=acumuladorPrecio/contadorGaseosa;


		document.write("La cantidad de precios pares : " + contadorPares + "<br>"+
						"La marca, litros y precio del mas barato " + minimoMarcaGaseosa + " cantidad de litros : " + minimoLitroGaseosa+ " precio : " + minimoPrecioGaseosa+ "<br>"+
						"La cantidad de gaseosas q valen menos que 50: " + cantidadGaseosasMenor50+ "<br>"+
						"El promedio de precios de todas las gaseosas: " + promedio + "<br>" +
						"El precio maximo y minimo de todas las gaseosas menores a 3 litros " + precioMaximo3litros + " " + precioMinimo3litros)
	



}

/*Realizar el algoritmo que permita ingresar la marca de la marca de la gaseosa,la/cantidad de litros (validar entre 1 litro, 2 litros y 3 litros), el precio el cual debe ser
entre 30 y 100 y
 por document.write:
a)La cantidad de precios pares.
b)La marca y litros del más barato
c)La cantidad de gaseosas que valen menos de 50.
d)El promedio del precio de todas las gaseosa.
f)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros.
*/
