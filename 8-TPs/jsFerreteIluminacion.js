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
 	var cantidad;
 	var lamparitas;
 	var descuento;
 	var precioBruto;
 	var precio;
 	var precioFinal;

 	cantidad=document.getElementById('Cantidad').value;
 	precio=35;
	precioBruto=cantidad+precio;

	porcen=100;

 	if (cantidad>5) 
 	{		
 		//descuento=precio * 50 / 100;
 		porcen=50;
 	}
	else 
	{
		if (cantidad==5)
		{
				if(marca=="ArgentinaLuz")
				{					
					porcen=60;					
				}
				else
				{ 						
					porcen=70;	
				}
					
		}else
		{
			if(cantidad==4)
			{
					descuento=precio * 40 / 100;	
			}else
			{
				if(cantidad==3)
				{
						descuento=precio * 40 / 100;	
				}
			}
		}

 	}
	descuento=precio * porcen/ 100;
 	precioFinal=precio-descuento;	
 	alert(precioFinal);
}
