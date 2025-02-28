/*
  String
  toString
*/

let nome = "Gustavo Ramos";
let idade = 19;
let segundo_nome = "Pipoca";

console.log(typeof nome, nome);
console.log(typeof idade, idade);
console.log(typeof segundo_nome, segundo_nome);

let frase = `${nome} tem ${idade} anos e o segundo nome dele é ${segundo_nome}`
let frase1 = nome + "tem" + idade + "anos e o segundo nome dele é"

console.log(frase);
console.log(frase1)