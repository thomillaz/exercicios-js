import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);

const conta2 = new ContaCorrente(cliente2, 102);
console.log(conta2.cliente);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, conta2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log("valor: ", valor);
console.log(conta2.saldo);
console.log(contaCorrenteRicardo);

console.log(`Número de contas: ${ContaCorrente.numeroDeContas}`);