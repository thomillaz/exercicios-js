var idade = 12
console.log(`Sua idade é ${idade} anos.`)
if (idade < 16){
    console.log('Não vota.')
} else if(idade == 16 || idade > 67){
    console.log('Voto opcional.')
} else{
    console.log('Voto obrigatório.')
}