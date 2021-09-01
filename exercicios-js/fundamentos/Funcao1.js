// Funcao sem retorno

function imprimirSomar(a, b) {
    console.log(a + b)
}

imprimirSomar(2, 3)
imprimirSomar(2)
imprimirSomar(2, 10, 5, 6)
imprimirSomar()

// Funcao com retorno

function soma (a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())