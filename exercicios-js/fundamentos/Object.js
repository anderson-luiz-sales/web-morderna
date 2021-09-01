const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4900.00
prod1['desconto legal'] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        setor: 'roupa',
        obj: {
            cor: 'Preto'
        }
    }
}

console.log(prod2)