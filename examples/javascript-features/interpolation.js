

const valor = 234
console.log(`agora aqui vai um valor : ${valor}`)


// interpolation with function

let a = 2
let b = 3
function sum (a, b) {
    return a + b
}
console.log(`um valor de função invocada na string ${sum(a,b)}`)

// ou seja, não faça concat de strings, use string interpolation