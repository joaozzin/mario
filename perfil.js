// perfil.js

const firebaseConfig = {
    apiKey: "AIzaSyDNcj5r6Rla559W-DplH2oFjIofgks2EFo",
    authDomain: "mario-card-game.firebaseapp.com",
    projectId: "mario-card-game",
    storageBucket: "mario-card-game.appspot.com",
    messagingSenderId: "279911068217",
    appId: "1:279911068217:web:9025d436144f32c9a113e8"
};

// Inicializar o Firebase com as configurações
firebase.initializeApp(firebaseConfig);

// Referência para o banco de dados
const db = firebase.database();

// Array para armazenar os usuários
let usuarios = [];

// Função para carregar os dados dos usuários
function carregarDadosUsuarios() {
    // Referência para o nó de usuários no banco de dados
    const usuariosRef = db.ref("usuarios");

    // Ler os dados dos usuários no banco de dados
    usuariosRef.once("value", (snapshot) => {
        const data = snapshot.val();
        usuarios = Object.values(data);

        // Chamar a função para carregar os dados do jogador após carregar os dados dos usuários
        carregarDadosJogador();
    });
}

// Função para carregar os dados do jogador
function carregarDadosJogador() {
    // Obter o nome do jogador do LocalStorage
    const nomeJogador = localStorage.getItem("nomeJogador");

    // Encontrar o jogador pelo nome na array de usuários
    const jogadorEncontrado = usuarios.find((usuario) => usuario.nome === nomeJogador);

    if (jogadorEncontrado) {
        // Atualizar os elementos da página com os dados do jogador
        document.getElementById("nome-jogador").textContent = jogadorEncontrado.nome;
        document.getElementById("time-jogador").textContent = jogadorEncontrado.time;
    } else {
        // Caso o jogador não seja encontrado, exibir uma mensagem de erro
        alert("Jogador não encontrado.");
    }
}

// Função para sair da conta
function sairDaConta() {
    // Implemente aqui a lógica para efetuar o logout do jogador (por exemplo, limpar os dados de autenticação ou sessão)

    // Redirecionar para a página de login após sair da conta
    window.location.href = "login.html";
}

// Função para voltar à página inicial
function voltarParaPaginaInicial() {
    window.location.href = "paginicial.html";
}

// Chamar a função para carregar os dados dos usuários ao carregar a página
carregarDadosUsuarios();