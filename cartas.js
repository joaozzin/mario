// cartas.js

// Deck do PROERD
const deckProerd = {
    oficialPROERD:{
      tipo: "Personagem",
      nome: "Oficial PROERD",
      custoMana: 2,
      poder: 5,
      defesa: 3,
      efeito: "Nenhum",
      alcance: "Alvo único",
      cura: 0,
      duracao: "Instantâneo",
      habilidadeEspecial: "Nenhuma",
      raridade:"Básica",
    },
    // Adicione as outras cartas do deck do PROERD aqui...
    };
  
  // Deck do Macon Men
  const deckMaconMen = {

      superMario:{
          tipo: "Personagem",
          nome: "Super Mario",
          custoMana: 3,
          poder: 6,
          defesa: 4,
          efeito: "Nenhum",
          alcance: "Alvo único",
          cura: 0,
          duracao: "Instantâneo",
          habilidadeEspecial: "Super Salto (aumenta temporariamente o poder em +3 na próxima rodada)",
          raridade:"Básica",
        },
    };
        // Adicione as outras cartas do deck do Macon Men aqui...
  
  // Deck do Yospintelo
  const deckYospintelo = {

    drogasAlucinógenas:{
          tipo: "Magia",
          nome: "Drogas Alucinógenas",
          custoMana: 5,
          poder: 0,
      defesa: 0,
      efeito: "Confusão (faz com que o oponente perca sua próxima jogada)",
      alcance: "Todos os inimigos",
      cura: 0,
      duracao: "1 turno",
      habilidadeEspecial: "Nenhuma",
      raridade:"Básica",
    },
};
    // Adicione as outras cartas do deck do Yospintelo aqui...
  
  // Deck do Luibombado
  const deckLuibombado = {

      bombadão:{
          tipo: "Personagem",
          nome: "Bombadão",
      custoMana: 3,
      poder: 6,
      defesa: 5,
      efeito: "Nenhum",
      alcance: "Alvo único",
      cura: 0,
      duracao: "Instantâneo",
      habilidadeEspecial: "Nenhuma",
      raridade:"Básica",
    },
    // Adicione as outras cartas do deck do Luibombado aqui...
};
  
  // Exporte os decks para que possam ser utilizados em outras partes do jogo
  export { deckProerd, deckMaconMen, deckYospintelo, deckLuibombado };