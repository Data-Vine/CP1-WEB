// Questão 1 

let vinho1 = "Angelica Zapata";
console.log(vinho1);

let vinho2 = null;
console.log(vinho2);

let vinho3;
console.log(vinho3);

//Questão 2
let x = 50;
let y = 80; 
console.log(x==y)
console.log(x>=y)
console.log(x!=y)

// Questão 3


//Questão 4


//Questão 6
// Função para calcular a média de 7 notas
function calcularMedia() {
    const notas = [];
    let soma = 0;
  
    // Coleta as 7 notas
    for (let i = 1; i <= 7; i++) {
      const nota = parseFloat(prompt(`Digite a nota ${i}:`));
      if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Nota inválida! Digite um valor entre 0 e 10.");
        return;
      }
      notas.push(nota);
      soma += nota;
    }
  
    // Calcula a média
    const media = soma / notas.length;
  
    // Exibe a média e a situação do aluno
    console.log(`\nMédia do aluno: ${media.toFixed(2)}`);
    if (media >= 6) {
      console.log("Resultado: Aprovado 🎉");
    } else {
      console.log("Resultado: Reprovado 😞");
    }
  }
  
  // Chama a função para executar
  calcularMedia();
  

//Questão 7


//Questão 8


//Questão 9

let valor = "25.75";

let convertido = parseFloat(valor);

console.log("Valor convertido: ", convertido);

console.log("Tipo da variável: ", typeof convertido);

//Questão 5

let usuario = prompt("Digite o nome de usuário: ");

let senha = prompt("Digite a senha: ");

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Falha na autenticação.");
}