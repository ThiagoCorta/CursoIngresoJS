function mostrar()
{

	
	//declarar contadores y variables 
	

//Suma de los negativos.
//					2-Suma de los positivos.
//					3-Cantidad de positivos.
//					4-Cantidad de negativos.
//					5-Cantidad de ceros.
//					6-Cantidad de números pares.
//					7-Promedio de positivos.
//					8-Promedios de negativos.
			//		9-Diferencia entre positivos y negativos, (positvos-negativos). //

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumuladorNegativo;
	var acumuladorPositivo;
	var respuesta="si";
	var contadorceros;
	var cantidadP;
	var cantidadN;
	var contadorPares;
	var promediopositivos;
	var promedionegativos;
	var diferencia;


	contadorpositivo=0;
	contadornegativo=0;
	contadorPares=0;
	contadorceros=0;
	acumuladorPositivo=0;
	acumuladorNegativo=0;


	while(respuesta=="si")
	{
		contador=contador+1;
		
		numero=prompt("Ingrese el numero" +contador+"# :"); // si pongo esto antes del contador va a sumar de 0 a 4 y no 1 a 5
		
		numero=parseInt(numero);

		
		//acumulador=acumulador+numero;

		respuesta=prompt("=> Si para continuar");


		if(respuesta!="si")
		{
			break;
		}

		
			if(numero>0)
			{
				
				acumuladorPositivo=acumuladorPositivo+numero;
				contadorpositivo=contadorpositivo+1;
				
			}
			else
			{
				acumuladorNegativo=acumuladorNegativo+numero;
				contadornegativo=contadornegativo+1
				
			}
				if(numero==0)

				{
					contadorceros=contadorceros+1;
				}

		if(numero%2==0)
		{
			contadorPares=contadorPares+1;
		}
		
		cantidadP=contadorpositivo;
		cantidadN=contadornegativo;
	}
	
	promediopositivos=acumuladorPositivo/contadorpositivo;
	promedionegativos=acumuladorNegativo/contadornegativo;

	diferencia=acumuladorPositivo-acumuladorNegativo;




	document.write("1-Suma de los negativos = " +acumuladorNegativo+"<br>"+
	 " 2-Suma de los positivos = " + acumuladorPositivo + "<br>"+ 
	 "3-Cantidad de positivos = " + cantidadP + "<br>"+
	 "4-Cantidad de negativos= " + cantidadN + "<br>"+
	 "5-Cantidad de ceros = " + contadorceros + "<br>"+
	 "6-Cantidad de números pares = " + contadorPares + "<br>"+
	 "7-Promedio de positivos = " + promediopositivos + "<br>"+
	 "8-Promedio de negativos = " + promedionegativos + "<br>"+
	 "9-Diferencia entre positivos y negativos = "+ diferencia + "<br>")




}//FIN DE LA FUNCIÓN