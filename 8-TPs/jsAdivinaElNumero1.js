/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );

	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	
	alert("Comienza el juego");
	
	contadorIntentos=0


}

function verificar()
{
	
	numeroIngresado=document.getElementById('numero').value;
	contadorIntentos=contadorIntentos+1;
	

	if  (numeroIngresado==numeroSecreto) 
	{
		
		mensaje=("Felicidades usted es un ganador y en solo " + contadorIntentos + " intentos." )
			//contadorIntentos++;
		
			switch(contadorIntentos)
			{
				case 1:
				mensaje="Sos un psiquico"
				break;

				case 2:
				mensaje="Perfecto"
				break;
				default:
			}

	}


	else
	{

		if (numeroIngresado>numeroSecreto) 
		{
			mensaje=("Estas por encima del numero secreto.")
			//contadorIntentos++;
		}

		else //(numeroIngresado<numeroSecreto)
		{
			mensaje=("Estas por debajo del numero secreto.");
			//contadorIntentos++; esta bien igual.

			
		} 
	}

	
	document.getElementById('intentos').value=contadorIntentos;

	alert(mensaje);
	console.log(numeroSecreto);
}





