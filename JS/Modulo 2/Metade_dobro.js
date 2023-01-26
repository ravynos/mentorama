const n1 = 10
const operador = 'metade'

if (operador == 'metade') {
    res = n1 / 2
    console.log(`A metade de ${n1} é ${res}.`)
} else if (operador ==  'dobro') {
    res = n1 * 2
    console.log(`O dobro de ${n1} é ${res}.`)
} else {
    console.log('Você esta digitando errado')
}