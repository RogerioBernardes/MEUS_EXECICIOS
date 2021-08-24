nomesComuns = [
  "Miguel",
  "Laura",
  "Lucas",
  "Beatriz",
  "Guilherme",
  "Maria",
  "Gabriel",
  "Ana",
  "Arthur",
  "Julia",
  "Enzo",
  "Alice",
  "Rafael",
  "Mariana",
  "Mariana",
  "João",
  "Larissa",
  "Gustavo",
  "Maria Eduarda",
  "Pedro",
  "Sofia",
  "Bernardo",
  "Isabela",
  "Matheus",
  "Valentina",
  "Bruno",
  "Leticia",
];

meuNome = "Chupa Cabra";
for (var i = 0; i <= nomesComuns.length; i++) {
  //A cada passagem ele olha se o nome está lá dentro e caso esteja ele grava na variável nome
  if (nomesComuns[i] == meuNome) {
    var nome = "Existe";
  }
} // fechamento do FOR

if (nome == "Existe") {
  console.log("Seu nome é comum");
} else {
  console.log("Seu nome não é comum");
}
