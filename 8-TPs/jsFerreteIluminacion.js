/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  precio bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio;
 	var cantidad;
 	var total;
 	var descuento;
 	var porcen;
 	var marca1;
 	var importefinal;

 

 	cantidad=document.getElementById('Cantidad').value;
 	marca1=document.getElementById('Marca').value;

 	cantidad=parseInt(cantidad);
 	precio=35;
 	porcen=1;


 	if(cantidad>=6)
 	{
 		porcen=50;
 	}
 	else
 	{
 		if(cantidad==5)
		{
			switch(marca1)
			{
				case "ArgentinaLuz":
					porcen=40;
				break;

				default:
					porcen=30;
				break;
			}
		}
		else
		{
			if(cantidad==4)
			{
				switch(marca1)
				{
					case "ArgentinaLuz":
						
					case "FelipeLamparas":
						porcen=25;
						break;

					default:
						porcen=20
						break;
				}
			}
			else
			{
				if(cantidad==3)
				{
					switch(marca1)
					{
						case "ArgentinaLuz":
						porcen=15;
						break;

						case "FelipeLamparas":
						porcen=10;
						break;

						default:
						porcen=5
						break;
					}
				}
			}
		}


  	}
 

 	total=precio*cantidad;
 	descuento=total*porcen/100;
 	importefinal=total-descuento;

 	if(importefinal>120)
	{
		porcen=-10;
		alert("Usted pago IIBB " + importefinal + " Siendo "+ descuento +" el impuesto que pago.");
	}
 	


 	document.getElementById('precioDescuento').value=importefinal;


}
