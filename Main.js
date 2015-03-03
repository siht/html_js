// no hay una sentencia que importe scripts de otros archivos
// al menos no en javascript.
// así que esos import se haran en la pagina web
function main()
{
	a = new CPersona('Shake', 60);
	// la otra forma de crear objetos es con la sintaxis json
	// o de diccionario tipo python
	// me salto las validaciones y me evito el metodo __init__
	b = {__nombre : 'rana rene',
		 __edad : 666,
		 get Nombre(){ return this.__nombre} //esto se marca como error por ciertos validadores
		 };
		 
	c = new CPersona2('Andy Barkley', 60);
	
	alert("atributo Nombre del objeto a: " + a.Nombre);
	alert("atributo Nombre del objeto b: " + b.Nombre);
	alert("atributo Nombre del objeto c: " + c.Nombre);
	alert("el objeto a es de tipo: " + typeof(a));
	alert("el objeto b es de tipo: " + typeof(b));
	alert("el objeto c es de tipo: " + typeof(c));
}