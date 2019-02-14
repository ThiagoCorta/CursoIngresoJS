
function mostrar()
{
	var nombre1;
	var nombre2;
	var peso1;
	var peso2;
	var suma;

	nombre1=prompt("Nombre de tu primer mascota");
	nombre2=prompt("Nombre de tu segundo mascota");
	peso1=prompt("Decime el peso de tu primer mascota");
	peso2=prompt("Decime el peso de tu segunda mascota");

	peso1=parseInt(peso1);
	peso2=parseInt(peso2);

	suma=peso1 + peso2;

	alert("Tenes dos mascotas " + nombre1 + " y " + nombre2 + " que pesan " + peso1 + " y " + peso2 + " kilos, la suma de los kilos es: " + suma)


}
