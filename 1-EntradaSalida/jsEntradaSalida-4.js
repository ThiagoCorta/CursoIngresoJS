/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre=prompt("Ingresa tu nombre");
	//nombre = prompt ("ingresa tu nombre", "nombre")
	// elnommre.value=nombre; tambien funciona y es otra forma de decirlo.
	//elNombre.value=nombre;
    document.getElementById('elNombre').value=nombre;


	//elNombre.getElementById("nombre");
	//getElementById("nombre")
	
	//alert (nombre);
}

