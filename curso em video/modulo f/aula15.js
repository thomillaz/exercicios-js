let num = [5, 8, 4]

console.log(`O vetor é: ${num}`)
num[3] = 6
console.log(num)
num.push(7)
console.log(num)

console.log(`O vetor possui ${num.length} posições`)
console.log(`Ordenado: ${num.sort()}`)

/*for(let pos = 0; pos < num.length; pos++){
    console.log(`Posição ${pos}: ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`Posição ${pos}: ${num[pos]}`)
}

console.log(`O valor 8 está na posição ${num.indexOf(8)}`)