// signup.js

firebaseConfig = {
  apiKey: "AIzaSyDNcj5r6Rla559W-DplH2oFjIofgks2EFo",
  authDomain: "mario-card-game.firebaseapp.com",
  projectId: "mario-card-game",
  storageBucket: "mario-card-game.appspot.com",
  messagingSenderId: "279911068217",
  appId: "1:279911068217:web:9025d436144f32c9a113e8"
};

// Inicializar o Firebase com as configurações
firebase.initializeApp(firebaseConfig);

// Referência para a coleção de usuários no banco de dados
const db = firebase.database();
const usuariosRef = db.ref("usuarios");

// Função para cadastrar o usuário
function cadastrarUsuario() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;
  const time = document.getElementById("time").value; // Obter o valor do time selecionado

  // Verifica se o nome de usuário já existe no banco de dados
  usuariosRef.once("value", (snapshot) => {
      const data = snapshot.val();
      const usuarios = Object.values(data);
      const usuarioExistente = usuarios.find((usuario) => usuario.nome === nome);

      if (usuarioExistente) {
          alert("Nome de usuário já existe. Por favor, escolha outro nome.");
      } else {
          // Caso o nome de usuário não exista, cadastrar o novo usuário
          const novoUsuario = {
              nome: nome,
              senha: senha,
              time: time // Salvar o time selecionado no banco de dados
          };

          usuariosRef.push(novoUsuario);
          alert("Usuário cadastrado com sucesso!");
          window.location.href = "login.html"; // Redirecionar para a página de login após o cadastro
      }
  });
}

// Função para voltar para a página index.html
function voltarParaIndex() {
  window.location.href = "index.html";
}
