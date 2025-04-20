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
// Dados do estudante
const student = {
  nome: "João Paulo",
  idade: 18,
  curso: "Engenharia de Software",
  ano: 2025
};

// Imprime no console (um embaixo do outro)
console.log(`Nome: ${student.nome}\n
  Idade: ${student.idade}\n
  Curso: ${student.curso}\n
  Ano: ${student.ano}`);

//Questão 8
const texto = `Tecnologia é um produto da ciência e da engenharia que envolve um conjunto
 de instrumentos, métodos e técnicas que visam a resolução de problemas.`;

 console.log(texto)

// 1) Buscar a primeira posição de "em"
const posicaoEm = texto.indexOf("em");
console.log(`1) Primeira posição de 'em': ${posicaoEm}`);

// 2) Buscar a última posição de "ia"
const posicaoIa = texto.lastIndexOf("ia");
console.log(`2) Última posição de 'ia': ${posicaoIa}`);

// 3) Verificar se a palavra "ciência" existe no texto
const temCiencia = texto.includes("ciência");
console.log(`3) A palavra 'ciência' está no texto? ${temCiencia ? 'Sim' : 'Não'}`);

// 4) Verificar se a palavra "métodos" existe no texto
const temMetodos = texto.includes("métodos");
console.log(`4) A palavra 'métodos' está no texto? ${temMetodos ? 'Sim' : 'Não'}`);

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