function mostrar()
{

	var contador;
	var acumulador;
	var numero;

	contador=0;
	acumulador=0;


	while(contador<5)
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero" +contador+"# :"); // si pongo esto antes del contador va a sumar de 0 a 4 y no 1 a 5
		numero=parseInt(numero);
		acumulador=acumulador+numero;

	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN