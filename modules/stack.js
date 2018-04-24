function stack() {
    var elements = [];
 
    this.add = add;
    this.pop = pop;
    this.getTopElement = getTopElement;
    this.hasElements = hasElements;
    this.removeAll = removeAll;
    this.size = size;
    

    // Con este método agregaremos uno o más elementos a nuestra pila (en la parte superior).
    function add(element) {
        elements.push(element);
    }

    // Este método quitará de la parte superior el último elemento y también lo regresará.
    function pop() {
        return elements.pop();
    }

    // Este método solamente nos regresará el elemento que se encuentre en la parte superior sin modificarlo ni removerlo.
    function getTopElement() {
        return elements[elements.length - 1];
    }

    // Retornará true si nuestra pila tiene al menos un elemento, o en su defecto false si esta vacía.
    function hasElements() {
        return elements.length > 0;
    }

    // Limpia la pila quitando todos los elementos.
    function removeAll() {
        elements = [];
    }
    
    // Regresará el tamaño de la pila (cuantos elementos hay en ella).
    function size() {
        return elements.length;
    }
}

exports.stack = stack;