function mostrar()
{
	var hora;
	var mensaje;

	
	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);

	switch(hora)
	{
		

		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de maniana";
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="Es de tarde";
			break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			mensaje="es de noche"

		
		if(hora<=24)
		{
			mensaje="Es de noche a dormir";
			break;
		}
		

		default:
			mensaje="ingresar horario valido"
			break;


		

	}

	alert(mensaje);
}
