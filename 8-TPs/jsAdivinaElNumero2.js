/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numero1;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	alert("Comienza el juego");
	contadorIntentos=0

}

function verificar()
{
	numeroIngresado=document.getElementById('numero').value;
	contadorIntentos=contadorIntentos+1;
	

	if  (numeroIngresado==numeroSecreto && contadorIntentos<2) 
	{
		
		mensaje=("Felicidades usted es un psiquico ");
			
	}

	else
	{	
		mensaje=("Felicudades usted tiene una Excelente percepción ");

	}	

		if (numeroIngresado==numeroSecreto && contadorIntentos<4)
		{
			mensaje=("Esto es suerte");
		}

		else 
		{
			mensaje=("Excelente Tecnica");
		}


			if (numeroIngresado==numeroSecreto && contadorIntentos<6)
			{
				mensaje=("Usted esta en la media");
			}

			else 
			{
				mensaje=("Falta tecnica");
			}

				if (numeroIngresado==numeroSecreto && contadorIntentos>10)
				{
					mensaje="Afortunado en el amor"
				}


	document.getElementById('intentos').value=contadorIntentos;

	alert(mensaje)
	
}