// Função para criptografar a mensagem usando a Cifra de César
function criptografar(mensagem, deslocamento) {
    let resultado = ""; // Variável para armazenar o resultado final da criptografia
  
    // Loop através de cada caractere na mensagem
    for (let i = 0; i < mensagem.length; i++) {
      let char = mensagem[i]; // Obtém o caractere atual
  
      // Verifica se o caractere é uma letra (maiúscula ou minúscula)
      if (char.match(/[a-z]/i)) {
        let code = mensagem.charCodeAt(i); // Obtém o código ASCII do caractere
  
        // Verifica se é uma letra maiúscula
        if (code >= 65 && code <= 90) {
          // Aplica o deslocamento e mantém o caractere dentro do intervalo de letras maiúsculas
          char = String.fromCharCode(((code - 65 + deslocamento) % 26) + 65);
        }
        // Verifica se é uma letra minúscula
        else if (code >= 97 && code <= 122) {
          // Aplica o deslocamento e mantém o caractere dentro do intervalo de letras minúsculas
          char = String.fromCharCode(((code - 97 + deslocamento) % 26) + 97);
        }
      }
  
      // Adiciona o caractere (criptografado ou não) ao resultado final
      resultado += char;
    }
  
    return resultado; // Retorna a mensagem criptografada
  }
  
  // Função para descriptografar a mensagem usando a Cifra de César
  function descriptografar(mensagem, deslocamento) {
    // A descriptografia é apenas a criptografia com o deslocamento invertido
    return criptografar(mensagem, 26 - deslocamento);
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
  