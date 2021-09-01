function compras(tb1, tb2) {
    const compraSoverte = tb1 || tb2
    const compraTv50 = tb1 && tb2
    // const comprarTv32 = !!(tb1 ^ tb2) // bitwise xor
    const comprarTv32 = tb1 != tb2
    const manterSaudavel = !compraSoverte // operador unário

    return { compraSoverte, compraTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))