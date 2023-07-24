function voltarParaIndex() {
    window.location.href = "index.html";
  }

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

let usuarios = [];

// Buscar os usuários no banco de dados e preencher a array 'usuarios'
usuariosRef.once("value", (snapshot) => {
    const data = snapshot.val();
    usuarios = Object.values(data);
    console.log("Dados do banco de dados carregados:", usuarios); // Adicione este console.log para verificar se os dados estão sendo carregados corretamente
});

// Função para verificar as credenciais
function verificarCredenciais() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    // Verifica se o usuário e senha correspondem a algum usuário na array
    const usuarioEncontrado = usuarios.find((usuario) => usuario.nome === nome && usuario.senha === senha);

    if (usuarioEncontrado) {
        localStorage.setItem("nomeJogador", nome);
        window.location.href = "paginicial.html";
    } else {
        alert("Credenciais inválidas. Por favor, tente novamente.");
    }
}