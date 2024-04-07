function listarQuestao() {
  // Configuração da requisição
  const url = `${urlbase}/questao`;

  // Submete a requisição
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        alert("Erro na requisição");
      }
      return response.json();
    })
    .then((data) => {
      let questoes =""; 
      for(i = 0; i < data.length; i++){
        questoes += `<div>
            <div>${data[i].enunciado}</div>
            <div>
              <input type="radio" value="true" name="questao-opcao-${data[i].idquestao}" id="verdadeiro${i}"><label for="verdadeiro${i}">Verdadeiro</label>
              <input type="radio" value="false" name="questao-opcao-${data[i].idquestao}" id="falso${i}"><label for="falso${i}">Falso</label>
            </div>
          </div>`;
      }
      document.getElementById("saida").innerHTML = questoes;
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}
