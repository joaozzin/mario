function voltarParaIndex() {
  window.location.href = "index.html";
}

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDNcj5r6Rla559W-DplH2oFjIofgks2EFo",
    authDomain: "mario-card-game.firebaseapp.com",
    projectId: "mario-card-game",
    storageBucket: "mario-card-game.appspot.com",
    messagingSenderId: "279911068217",
    appId: "1:279911068217:web:9025d436144f32c9a113e8"
};
  
  // Inicializar o Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Referência para a coleção de usuários no banco de dados
  const db = firebase.database();
  const usuariosRef = db.ref("usuarios");
  
  // Função para cadastrar um novo usuário
  function cadastrarUsuario() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
  
    // Verifica se o nome de usuário já existe
    usuariosRef.once("value", (snapshot) => {
      const data = snapshot.val();
      const usuarios = Object.values(data);
      const usuarioExistente = usuarios.find((usuario) => usuario.nome === nome);
  
      if (usuarioExistente) {
        alert("Este nome de usuário já está em uso. Por favor, escolha outro.");
      } else {
        // Caso o nome de usuário não exista, cadastra o novo usuário no banco de dados
        const novoUsuario = {
          nome: nome,
          senha: senha,
        };
        usuariosRef.push(novoUsuario);
  
        alert("Usuário cadastrado com sucesso!");
  
        // Redireciona para a página de login após o cadastro
        window.location.href = "login.html";
      }
    });
  }
  