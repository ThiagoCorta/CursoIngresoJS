/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
 	var edad1;
 	var sexo1;
 	var estadoC;
 	var sueldoBruto;
 	var legajo1;
 	var nacionalidad1;




 			edad1=prompt("Ingresar edad de 18 a 90");
 			edad1=parseInt(edad1);
 		while(edad1 <= 17 || edad1 >= 91)
		{
			edad1=prompt("Error, ingresa edad valida de 18 a 90");
			edad1=parseInt(edad1);
			
		}

			sexo1=prompt("Ingresar sexo F O M");
	
		while(sexo1 != "f" && sexo1 != "m")
		{
			sexo1=prompt("Error ingresar sexo F O M");
			
		}
		
			estadoC=prompt("Ingresar estado civil 1=S 2=C 3=d 4=V");
		while(estadoC<1 || estadoC>4)
		{
			estadoC=prompt("Error ingresar estado civil valido");
			
		}

			sueldoBruto=prompt("Ingresar sueldo bruto no menor a 8000");
			sueldoBruto=parseInt(sueldoBruto);
		while(sueldoBruto<8000)
		{
			sueldoBruto=prompt("Error, ingresar sueldo bruto no menor a 8000");
			sueldoBruto=parseInt(sueldoBruto);
		}

			legajo1=prompt("Ingresar legajo numero 4 cifras sin ceros a la isq");
		while(legajo1<1000 || legajo1>9999)
		{
			legajo1=prompt("Error ,ingresar legajo numero 4 cifras sin ceros a la isq");
		}

			nacionalidad1=prompt("Ingresar Nacionalidad: A= Arg, E= extranjeros, N= nacionalizados");
		while(nacionalidad1!="a" && nacionalidad1!="e" && nacionalidad1!="n")
		{
			nacionalidad1=prompt("Error,ingresar Nacionalidad: A= Arg, E= extranjeros, N= nacionalizados");
		}


		document.getElementById('Edad').value=edad1;
		document.getElementById('Sexo').value=sexo1;
		document.getElementById('EstadoCivil').value=estadoC;
		document.getElementById('Sueldo').value=sueldoBruto;
		document.getElementById('Legajo').value=legajo1;
		document.getElementById('Nacionalidad').value=nacionalidad1;
}
