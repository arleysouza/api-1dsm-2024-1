
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
        alert(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
}

function logar() {
  const mail = document.getElementById("login-mail").value.trim();

  if (!mail || mail.length == 0) {
    alert("Forneça o e-mail");
  } else {
    const usuario = { mail };

    // Configuração da requisição
    const url = `${urlbase}/login`;

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
        alert(JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
}