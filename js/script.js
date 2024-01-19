// Why

var imagens = [
  {
    src: "./assets/correr.png",
    titulo: "Saúde",
    texto:
      "<strong>Bem-Estar Físico e Mental:</strong><br>Metas de saúde podem incluir objetivos relacionados à prática regular de exercícios, alimentação saudável e cuidados com a saúde mental. Isso contribui para o bem-estar físico e mental.<br><br><strong>Prevenção e Manutenção:</strong><br>Estabelecer metas de saúde ajuda na prevenção de doenças e na manutenção de uma vida saudável. Exemplos incluem check-ups regulares, vacinações e adoção de hábitos saudáveis.",
  },
  {
    src: "./assets/tocar.png",
    titulo: "Profissional",
    texto:
      "<strong>Desenvolvimento Profissional:</strong><br>Metas de carreira podem incluir objetivos de aprendizado, treinamento, certificações e aprimoramento de habilidades para impulsionar o desenvolvimento profissional.<br><br><strong>Avanço na Carreira:</strong><br>Estabelecer metas para promoções, novos desafios e responsabilidades pode impulsionar o avanço na carreira, proporcionando um direcionamento claro para o crescimento profissional.",
  },
  {
    src: "./assets/guardar.png",
    titulo: "Finanças",
    texto:
      "<strong>Estabilidade Financeira:</strong><br>Metas financeiras incluem a criação de um plano de orçamento, economias e investimentos, visando alcançar estabilidade financeira e segurança a longo prazo.<br><br><strong>Redução de Dívidas:</strong><br>Definir metas relacionadas à redução de dívidas pode ser crucial para melhorar a saúde financeira e liberar recursos para investir em outras áreas.",
  },
  {
    src: "./assets/viajar.png",
    titulo: "Pessoal",
    texto:
      "<strong>Desenvolvimento Pessoal:</strong><br>Metas pessoais podem abranger áreas como aprendizado contínuo, desenvolvimento de habilidades, leitura e expansão de conhecimentos, promovendo o crescimento pessoal.<br><br><strong>Frequência de Viagens:</strong><br>Estabelecer metas relacionadas à frequência de viagens, como fazer uma viagem internacional a cada ano ou explorar uma nova cidade a cada trimestre.<br><br><strong>Relacionamentos e Comunicação:</strong><br>Estabelecer metas pessoais pode envolver a melhoria das habilidades de comunicação, construção de relacionamentos significativos e investimento em amizades e familiares.",
  },
];

function changeContent(index) {
  var mainImage = document.getElementById("imagebox");
  var mainText = document.getElementById("mainText");
  var mainTitle = document.getElementById("mainTitle");

  mainImage.src = imagens[index].src;
  mainText.innerHTML = imagens[index].texto;
  mainTitle.innerHTML = imagens[index].titulo;
}

// Formulario

document.addEventListener("DOMContentLoaded", function () {
  const goalForm = document.getElementById("goalForm");
  const metaCardsContainer = document.getElementById("metaCardsContainer");

  goalForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura dos dados do formulário
    const goalTitle = document.getElementById("goalTitle").value;
    const goalDescription = document.getElementById("goalDescription").value;
    const goalDate = document.getElementById("goalDate").value;
    const goalCategory = document.getElementById("goalCategory").value;

    //Categorias Icones
    const categoryIcons = {
      saude: "./assets/health.svg",
      profissional: "./assets/work.svg",
      pessoal: "./assets/personal.svg",
      financas: "./assets/money.svg",
    };

    const categoryIcon = categoryIcons[goalCategory];

    // Criação do card da meta
    const metaCard = document.createElement("div");
    metaCard.classList.add("meta-card");
    metaCard.innerHTML = `
            <img src="${categoryIcon}" class="category_icon" alt="icone-categoria">
            <h3>${goalTitle}</h3>
            <p>${goalDescription}</p>
            <p><strong>Data Limite:</strong> ${goalDate}</p>
            <p><strong>Categoria:</strong> ${
              goalCategory.charAt(0).toUpperCase() +
              document.getElementById("goalCategory").value.slice(1)
            }</p>
        `;

    // Adiciona o card ao container
    metaCardsContainer.appendChild(metaCard);

    // Limpa os campos do formulário
    goalForm.reset();
  });
});
