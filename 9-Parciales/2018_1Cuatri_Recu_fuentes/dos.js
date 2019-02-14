function mostrar()
{
  var compra;
  var descuento;
  var compra1;
  var iva
  var comprafinal;

  compra=prompt("Ingrese el valor de su compra");

  compra=parseInt(compra);


  descuento=compra * 10 / 100;
  compra1= compra - descuento;
  iva= compra1 *21 /100;
  comprafinal = compra1 + iva;

  alert("Tu compra es de " + compra + " tenes un  descuento del 10% queda en " + compra1 + ", mas el iva es " + comprafinal)
}
