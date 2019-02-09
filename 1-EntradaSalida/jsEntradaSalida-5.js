/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;	
	var edad;
	//var n1 = "Usted se llama "
	//var n2 = " y tiene "
	//var n3 = " años "
	//nombre=document.getElementById('elNombre').value;

	//edad=document.getElementById('laEdad').value;
	nombre=elNombre.value;
	edad=laEdad.value;
	
	//alert("Usted se llama") nombre.concat(edad) ;//nombre.concat(edad)); noppp
	
	// nombre.concat(edad) noppp 
	
	//document.getElementById('elNombre').value=nombre;
	//elNombre.value=nombre;
	//laEdad.value=edad;
	//document.getElementById('laEdad').value=edad;
	
	//alert(nombre)+(edad);
	//alert(n1.concat(nombre, n2, edad, n3));
	alert("Usted se llama "+nombre+" "+" y tiene "+edad+ " años")

}

