function queue() {
    var elements = [];
 
    this.add = add;
    this.remove = remove;
    this.getFrontElement = getFrontElement;
    this.hasElements = hasElements;
    this.removeAll = removeAll;
    this.size = size;
    this.toString = toString;
    
    // Este método se encargará de agregar nuevos elementos a la cola (tail).
    function add(element) {
        elements.push(element);
    }
    
    // Quita el primer elemento que este al frente de la cola y lo regresa.
    function remove() {
        return elements.shift();
    }

    // Obtiene el elemento que esta al frente pero no lo elimina ni modifica.
    function getFrontElement() {
        return elements[0];
    }
 
    // Valida si al menos existe 1 elemento en la cola.
    function hasElements() {
        return elements.length > 0;
    }
    
    // Limpia la cola.
    function removeAll() {
        elements = [];
    }
    
    // Nos regresa el tamaño de la cola (número de elementos).
    function size() {
        return elements.length;
    }
    
    // Este método nos servirá para mostrar todos los elementos que están en la cola en forma de string.
    function toString() {
        console.log(elements.toString());
    }
}

exports.queue = queue;
 