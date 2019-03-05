function mostrar()
{
	var letra;
	var numero;
	var contador;
	var respuesta;
	var contadorPares;
	var contadorCeros;
	var acumuladorNumerosPositivos;
	var acumuladorNumerosNegativos;
	var numeroMaximo;
	var letraMaximo;
	var numeroMinimo;
	var letraMinimo;
	var contadorImpares;
	var promedio;
	var contadorPositivos;


	contador=0;
	acumuladorNumerosNegativos=0;
	acumuladorNumerosPositivos=0;
	contadorPares=0;
	contadorCeros=0;
	contadorImpares=0;
	contadorPositivos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		letra=prompt("Ingresar una letra");

		numero=prompt("Ingresar un numero entre -100 y 100");
		numero=parseInt(numero);

		while(numero<-100 || numero>100)
		{
			numero=prompt("Error, Ingresar un numero entre -100 y 100");
			numero=parseInt(numero);
		}

		respuesta=prompt("Ingresar si para continuar.")

		contador=contador+1;

		while(respuesta!="si")
		{
			break;
		}


		if(numero%2==0 && numero!=0)
		{
			contadorPares=contadorPares+1;
		}
		else
		{
			if(numero%2!=0)
			{
			contadorImpares=contadorImpares+1;
			}	
		}

				if(numero<0)
				{
					acumuladorNumerosNegativos=acumuladorNumerosNegativos+numero;
				}
				else
				{
					if(numero>0)
					{
						acumuladorNumerosPositivos=acumuladorNumerosPositivos+numero;
						contadorPositivos=contadorPositivos+1;
					}
					else
					{
						if(numero==0)
						{
						contadorCeros=contadorCeros+1
						}
					}
					
				}

					if(contador==1)
					{
						numeroMinimo=numero;
						numeroMaximo=numero;
						letraMinimo=letra;
						letraMaximo=letra;
					}
					else
					{
						if(numero>numeroMaximo)
						{
							numeroMaximo=numero;
							letraMaximo=letra;
						}
						else
						{
							if(numero<numeroMinimo)
							{
								numeroMinimo=numero;
								letraMinimo=letra;
							}
						}
					}

	}

	promedio=acumuladorNumerosPositivos/contadorPositivos;


	document.write("La cantidad de numeros pares:=  " + contadorPares + "<br>"+
					"La cantidad de numeros Impares:=  " + contadorImpares + "<br>"+
					"La cantidad de ceros:=  " + contadorCeros + "<br>"+
					"El promedio de numeros positivos:=  " + promedio + "<br>"+
					"La suma de todos los numeros Negativos:= " + acumuladorNumerosNegativos + "<br>"+
					"El numero y la letra del maximo:=  " + numeroMaximo + " " + letraMaximo + "<br>"+
					"El numero y la letra del minimo:=  " + numeroMinimo + " " + letraMinimo)



}
