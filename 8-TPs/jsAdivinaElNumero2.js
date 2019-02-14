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
	
	numero1=document.getElementById('numero').value;


	if (numero1==numeroSecreto && contadorIntentos>0 || contadorIntentos<2) {

		alert("Usted es un Psíquico”");
		contadorIntentos++;
	}

	else(numero1==numeroSecreto && contadorIntentos>1 || contadorIntentos<3)
		
		{
			alert("Excelente percepción");
			contadorIntentos++;

		}

	else (numero1==numeroSecreto && contadorIntentos>2 || contadorIntentos<4)
		{
			alert("Esto es suerte");
			contadorIntentos++;
		}

	else (numero1==numeroSecreto && contadorIntentos>3 || contadorIntentos<5)
		{
			alert("Excelente tecnica");
			contadorIntentos++;
		}

	else (numero1==numeroSecreto && contadorIntentos>4 || contadorIntentos<6)
		{
			alert("Usted esta en la media");
			contadorIntentos++;
			;

	else (numero1==numeroSecreto && contadorIntentos>5 || contadorIntentos<11)
		{
			alert("Falta tecnica");
			contadorIntentos++;
		}

	else (numero1==numeroSecreto && contadorIntentos>10)
		{
			alert("Afortunado en el amor");
			contadorIntentos++;
		}


	if (numero1<numeroSecreto) 
	{

		alert("Usted esta por debajo del numero secreto.");
		contadorIntentos++;

	}
	else (numero1>numeroSecreto)
	{
		
		alert("Usted esta por encima del numero secreto");
		contadorIntentos++;
	}
	
	document.getElementById('intentos').value=contadorIntentos;
}