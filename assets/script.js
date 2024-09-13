// Função para criptografar a mensagem usando a Cifra de César (incluindo letras, símbolos e números)
function criptografar(mensagem, deslocamento) {
  let resultado = ""; // Variável para armazenar o resultado final da criptografia

  // Garante que o deslocamento esteja no intervalo de 0 a 255
  deslocamento = deslocamento % 256;

  // Loop através de cada caractere na mensagem
  for (let i = 0; i < mensagem.length; i++) {
    let char = mensagem[i]; // Obtém o caractere atual
    let code = mensagem.charCodeAt(i); // Obtém o código ASCII do caractere

    // Aplica o deslocamento a qualquer caractere (incluindo símbolos)
    char = String.fromCharCode((code + deslocamento) % 256);

    // Adiciona o caractere (criptografado) ao resultado final
    resultado += char;
  }

  return resultado; // Retorna a mensagem criptografada
}

// Função para descriptografar a mensagem usando a Cifra de César
function descriptografar(mensagem, deslocamento) {
  // Garante que o deslocamento esteja no intervalo de 0 a 255
  deslocamento = deslocamento % 256;

  // A descriptografia é a criptografia com o deslocamento invertido
  return criptografar(mensagem, 256 - deslocamento);
}

// Event listener para o botão de criptografar
document.querySelector(".encrypted-button").addEventListener("click", function () {
  const chave = parseInt(document.querySelector("input[name='key']").value); // Obtém o valor da chave (deslocamento) do input
  const mensagem = document.querySelector("input[name='message']").value; // Obtém a mensagem a ser criptografada do input

  // Verifica se a chave é um número válido e se a mensagem não está vazia
  if (!isNaN(chave) && mensagem) {
    // Criptografa a mensagem usando a função de criptografia
    const mensagemCriptografada = criptografar(mensagem, chave);

    // Exibe a mensagem criptografada no elemento HTML correspondente
    document.getElementById("encrypted-message").textContent = mensagemCriptografada;

  } else {
    // Alerta o usuário para inserir valores válidos se a entrada for inválida
    alert("Por favor, insira uma chave e uma mensagem válidas.");
  }
});

// Event listener para o botão de descriptografar
document.querySelector(".decrypted-button").addEventListener("click", function () {
  const chave = parseInt(document.querySelector("input[name='key']").value); // Obtém o valor da chave (deslocamento) do input
  const mensagem = document.querySelector("input[name='message']").value; // Obtém a mensagem a ser descriptografada do input

  // Verifica se a chave é um número válido e se a mensagem não está vazia
  if (!isNaN(chave) && mensagem) {
    // Descriptografa a mensagem usando a função de descriptografia
    const mensagemDescriptografada = descriptografar(mensagem, chave);

    // Exibe a mensagem descriptografada no elemento HTML correspondente
    document.getElementById("decrypted-message").textContent = mensagemDescriptografada;

  } else {
    // Alerta o usuário para inserir valores válidos se a entrada for inválida
    alert("Por favor, insira uma chave e uma mensagem válidas.");
  }
});

// Função para limpar os resultados e os campos de entrada
function limparResultados() {
  // Limpa os campos de entrada para chave e mensagem
  document.querySelector("input[name='key']").value = "";
  document.querySelector("input[name='message']").value = "";

  // Limpa as mensagens de resultado exibidas na interface
  document.getElementById("encrypted-message").textContent = "";
  document.getElementById("decrypted-message").textContent = "";
}

// Event listener para o botão de limpar
document.querySelector(".clear-button").addEventListener("click", limparResultados);