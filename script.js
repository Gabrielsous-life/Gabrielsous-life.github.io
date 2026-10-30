// Mini demo do ECHO-6: o visitante digita 1, 2 ou 3 e o A.R.T.H.U.R. responde.
const output = document.getElementById("terminal-output");
const input = document.getElementById("cmd");

const respostas = {
  "1": "> O beco cheira a ozônio e óleo queimado.\n> Tem um crachá da Aegis Corp no chão, molhado.\n> Alguém saiu daqui com pressa.",
  "2": "> Acesso negado.\n> ...\n> Ok, entrei mesmo assim. Não conta pra ninguém.\n> Tem um arquivo apagado com o nome ECHO-6.",
  "3": "> Silêncio também é uma resposta, detetive.\n> Mas a cidade não vai esperar por você.",
};

function escrever(texto) {
  output.textContent += "\n\n" + texto;
  output.scrollTop = output.scrollHeight; // rola até o fim
}

input.addEventListener("keydown", (evento) => {
  if (evento.key !== "Enter") return;

  const comando = input.value.trim();
  input.value = "";
  if (!comando) return;

  escrever("$ " + comando);
  escrever(respostas[comando] ?? "> Comando não reconhecido. Tente 1, 2 ou 3.");
});
