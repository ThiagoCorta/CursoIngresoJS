function mostrar()
{
	var planeta;
	var mensaje;

	planeta=prompt("Ingresar un planeta del sistema solar");

	switch(planeta)
	{
		case "tierra":
			mensaje="Aca vivimos"
			break;

		case "mercurio":

		case "venus":
			mensaje="Aca hace calor";
			break;

		case "marte":
		case "urano":

		case "neptuno":

		case "saturno":
			mensaje="Aca hace mas frio"
			break;

		default:
			mensaje="Ingresar un planeta valido";
			break;
	}

	alert(mensaje);
}
