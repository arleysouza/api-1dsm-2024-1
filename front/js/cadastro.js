function salvarUsuario() {
  const mail = document.getElementById("mail").value.trim();
  const nome = document.getElementById("nome").value.trim();

  if (!mail || mail.length == 0) {
    alert("Forneça o e-mail");
  } else if (!nome || nome.length == 0) {
    alert("Forneça o nome");
  } else {
    const usuario = { mail, nome };

    // Configuração da requisição
    const url = `${urlbase}/usuario`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    };

    // Submete a requisição
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          alert("Erro na requisição");
        }
        return response.json();
      })
      .then((data) => {
        if (data.idusuario) {
          salvarLogin(data);
          window.location.href = "./questionario.html";
        }
        else{
          alert(data.erro);
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
}

// Salvar dados de login
function salvarLogin(objeto) {
  // JSON.stringify() é usado para converter de objeto JS em string JSON
  localStorage.setItem("usuario", JSON.stringify(objeto));
}
