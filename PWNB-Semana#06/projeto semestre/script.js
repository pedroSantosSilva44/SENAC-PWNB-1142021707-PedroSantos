document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginButton").addEventListener("click", mostrarLogin);

    function mostrarLogin() {
        const username = prompt("Digite seu nome de usuário:");
        const password = prompt("Digite sua senha:");

        // Adicione aqui a lógica de autenticação, se necessário

        if (username && password) {
            alert("Login bem-sucedido!");
            // Adicione aqui o redirecionamento para a página de destino após o login
        } else {
            alert("Nome de usuário ou senha incorretos. Tente novamente.");
        }
    }
});
