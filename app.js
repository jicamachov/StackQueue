const stack = require('./modules/stack');
const queue = require('./modules/queue');

console.log('-----------------------STACK------------------------');


let fruitsStack =  new stack.stack();
if (!fruitsStack.hasElements()) {
    fruitsStack.add('Banana');
    fruitsStack.add('Apple');
    fruitsStack.add('Mango');
    console.log(fruitsStack.size()); // Mostrará 3
    var mango = fruitsStack.pop(); //Obtiene mango y lo saca de la pila, ahora solo quedan 2 elementos.
    console.log(mango);
    console.log(fruitsStack.getTopElement()); // Imprimirá Apple, puesto que es el elemento que quedo hasta arriba.
    console.log(fruitsStack.size()); // Mostrará 2
    fruitsStack.removeAll(); // Limpia la pila
    console.log(fruitsStack.hasElements()); // Retornará falso puesto que la pila esta vacía
}

console.log('----------------------COLA-------------------------');


var peopleQueue = new queue.queue();
console.log(peopleQueue.hasElements()); // Mostrará falso
 
peopleQueue.add('Josex2');
peopleQueue.add('Eduardo');
peopleQueue.add('fabian');
peopleQueue.add('Luna');
peopleQueue.add('Luis');
peopleQueue.add('Jheyser');
 
peopleQueue.toString(); // Mostrará: Carlos,Cristina,Mario
console.log(peopleQueue.size()); // Mostrará 3
console.log(peopleQueue.hasElements()); // Mostrará true
peopleQueue.remove(); // Quitamos a Carlos
peopleQueue.remove(); // Quitamos a Cristina
peopleQueue.toString(); // Mostrará: Mario