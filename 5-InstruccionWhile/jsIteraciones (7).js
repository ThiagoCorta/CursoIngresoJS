function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";


	while(respuesta=="si")
	{
		contador=contador+1;
		
		numero=prompt("Ingrese el numero" +contador+"# :"); // si pongo esto antes del contador va a sumar de 0 a 4 y no 1 a 5
		
		numero=parseInt(numero);
		
		acumulador=acumulador+numero;

		respuesta=prompt("=> Si para continuar");

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

// a- contador
// b- preguntar? para cambiar la variable
// c- poner break