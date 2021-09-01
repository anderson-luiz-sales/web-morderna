const [a] = [10]
console.log(a)

const [n1 , n3 , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[10, 7, 9, 8], [1, 0, 2, 6]]
console.log(nota)