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

// Função para carregar os dados do jogador
function carregarDadosJogador() {
    // Substitua "SEU_ID_DO_JOGADOR" pelo ID do jogador logado (pode ser o nome ou um ID único, dependendo da sua implementação)
    const idJogador = "SEU_ID_DO_JOGADOR";

    // Referência para o nó do jogador no banco de dados
    const jogadorRef = db.ref("jogadores").child(idJogador);

    // Ler os dados do jogador no banco de dados
    jogadorRef.once("value", (snapshot) => {
        const dadosJogador = snapshot.val();

        // Atualizar os elementos da página com os dados do jogador
        document.getElementById("nome-jogador").textContent = dadosJogador.nome;
        document.getElementById("time-jogador").textContent = dadosJogador.time;
    });
}

// Função para sair da conta
function sairDaConta() {
    // Implemente aqui a lógica para efetuar o logout do jogador (por exemplo, limpar os dados de autenticação ou sessão)

    // Redirecionar para a página de login após sair da conta
    window.location.href = "login.html";
}

// Chamar a função para carregar os dados do jogador ao carregar a página
carregarDadosJogador();
