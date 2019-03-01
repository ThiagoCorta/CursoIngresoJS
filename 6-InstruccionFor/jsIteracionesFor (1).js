function mostrar()
{
//	var contador;

	//contador=0;

//	for (       ; contador<5 ;     ) // los ; van SIEMPRE aunqque esten en blanco. 1 inicio 2 condicion 3 
//	{
//		console.log(contador);
//		contador++;
//	}
	
//}

	// puedo iniciar el contador arriba y no ponerlo en el primer lugar y funciona igual.
	// el 3ro va el contador y tambien puede estar vacio pero se pone abajo.

	// en el 2do puedo poner CUALQUIER condicion por ej hasta encontrar un jose nombre!=jose; se va a ejecutar hasta encontrar un jose.

	var contador;

	contador=0;

	for ( ; ; )
	{
		console.log(contador);
		contador++;

		if(contador==5)
			{
				break;
			}
	}

}