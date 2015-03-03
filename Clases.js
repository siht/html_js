// plantilla para crear objetos con los mismos atributos
// en javascript no hay algo como el tipado de objetos
// una clase solo crea objetos de tipo object
// pero sirve para no equivocarse a la hora de crear varias instancias
function CPersona(nombre, edad)
{
	// esta funcion hace lo que hace el metodo init de python
	// solo inicializa variables
	// la pongo por el hecho de gustarme python
    this.__init__ = function(nombre = 'Kakaroto' , edad = 99){ // parametros por defecto, aunque hay personas que ponen nulos
		// hay otra forma de poner parametros por defecto
		this.__nombre = nombre || 'jhon'; // parametros por defecto evita que sean nulos
		this.__edad = edad || 8; // parametros por defecto evita que sean vacios nulos
	}
	// uso del metodo init
    this.__init__(nombre, edad)
	// se pueden definir getters y setters
	// solo haremos un getter
    this.__defineGetter__('Nombre', function(){return this.__nombre;})
}

function CPersona2(nombre, edad)
{
	this.__nombre = nombre || 'jhon';
	this.__edad = edad || 8;
    get this.Nombre(){ return this.__nombre }
}