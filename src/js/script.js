// Questão 1 
let vinho1 = "Angelica Zapata";
let vinho2 = null;
let vinho3;
function questao1() {
    document.getElementById("out1").innerText = `Vinho 1: ${vinho1}\nVinho 2: ${vinho2}\nVinho 3: ${vinho3}`;
    console.log(vinho1);
    console.log(vinho2);
    console.log(vinho3);
}

//Questão 2
function questao2() {
    let x = parseFloat(document.getElementById("a").value);
    let y = parseFloat(document.getElementById("b").value);
    let resultado = `${x} != ${y}: ${x != y}\n${x} == ${y}: ${x == y}\n${x} >= ${y}: ${x >= y}`;
    document.getElementById("out2").innerText = resultado;
    console.log(resultado);
}
// // Questão 3
function questao3() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura * altura);
    let resultado = "";

    switch (true) {
        case (imc < 18.5): resultado = "Abaixo do peso"; break;
        case (imc <= 24.9): resultado = "Peso ideal"; break;
        default: resultado = "Acima do peso";
    }
    document.getElementById("out3").innerText = `IMC: ${imc.toFixed(2)}\nResultado: ${resultado}`;
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(resultado);
}

// //Questão 4
function questao4() {
    let texto = "";
    for (let i = 1; i <= 50; i++) {
        texto += `Repetição número: ${i}\n`;
    }
    document.getElementById("out4").innerText = texto;
    console.log(texto);
}

// //Questão 5
function questao5() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagem = (usuario === "admin" && senha === "1234") ? "Login realizado com sucesso!" : "Falha na autenticação.";
    document.getElementById("out5").innerText = mensagem;
    if (usuario === "admin" && senha === "1234") {
        console.log("Login realizado com sucesso!");
    } else {
        console.log("Falha na autenticação.");
    }
}

// //Questão 6
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
function questao7() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let curso = document.getElementById("curso").value;
    let ano = document.getElementById("ano").value;
    document.getElementById("out7").innerText = `${nome}\n${idade}\n${curso}\n${ano}`;
    console.log(`Nome: ${nome}\nIdade: ${idade}\nCurso: ${curso}\nAno: ${ano}`);
}

// //Questão 8
;
function questao8() {
    let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";
    let posEm = texto.indexOf("em");
    let ultIa = texto.lastIndexOf("ia");
    let contemCiencia = texto.includes("ciência") ? "Sim" : "Não";
    let contemMetodos = texto.includes("métodos") ? "Sim" : "Não";

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
    console.log(`4) A palavra 'métodos' está no texto? ${temMetodos ? 'Sim' : 'Não'}`)

    document.getElementById("out8").innerText = `Posição de 'em': ${posEm}\nÚltima posição de 'ia': ${ultIa}\nContém 'ciência'? ${contemCiencia}\nContém 'métodos'? ${contemMetodos}`;
}

// //Questão 9
function questao9() {
    let valor = document.getElementById("valorStr").value;
    let convertido = parseFloat(valor);
    let tipo = typeof convertido;
    console.log("Valor convertido: ", convertido);
    console.log("Tipo da variável: ", typeof convertido);
}
