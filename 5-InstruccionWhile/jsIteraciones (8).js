function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador=0;
	var respuesta='si';

	while(1)
	{
		contador=contador+1;
		
		numero=prompt("Ingrese el numero" +contador+"# :"); // si pongo esto antes del contador va a sumar de 0 a 4 y no 1 a 5
		
		numero=parseInt(numero);
		
		acumulador=acumulador+numero;

		respuesta=prompt("=> Si para continuar");

		if(respuesta!="si")
		{
			break;
		}

		
			if(numero>0)
			{
				positivo=positivo+numero;
			}
			else
			{
				negativo=negativo*numero;
			}
		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN