function mostrar()
{
	var importe;
	var propina;
	var importeP;
	var iva;
	var importeI;
	var importefinal;
	var grupo;
	var importegrupo;

	importe=prompt("Ingresar el importe sin iva");
	grupo=prompt("Ingresar entre cuantas personas pagan")
	
	importe=parseInt(importe);
	grupo=parseInt(grupo);


	propina=importe * 10 / 100;
	importeP=importe+propina;
	iva=importe * 21 / 100;
	importeI=importe+iva;
	importefinal=importeP+iva;
	importegrupo=importefinal / grupo;

	alert("El importe + propina del 10% es: " + importeP + " + iva incluido es: " + importeI + " importe final = " + importefinal + " Entre " + grupo + " amigos el importe de cada uno es " + importegrupo)






}
