// Tableau contenant des Objet

const quizData = [
  // Chaque objet contient une question, 4 posibilité de réponse et la réponse correcte
  {
    question: "Qui est la plus bellisima ?",
    a: "Julie",
    b: "Angelina Joli",
    c: "Kate moss",
    d: "Les copines de Ju'",
    correct: a,
  },
  {
    question: "Qui est la plus mim's ?",
    a: "Julie bourré",
    b: "Julie qui dort",
    c: "Julie grochon ",
    d: "Julie, TOUT LE PUTAIN DE TEMPS ! ",
    correct: d,
  },
  {
    question: "Qui va réussir son permis demain ?",
    a: "Julie, et elle a interet sinon .....",
    b: "Alain prost",
    c: "Ayrton Senna",
    d: "Mickael Jackson",
    correct: a,
  },
  {
    question: "Meilleur morceau de la Julie ?",
    a: "Le menton",
    b: "Les fesses",
    c: "Les oreilles",
    d: "Le coeur (annnnnnw kro chou)",
    correct: d,
  },
];

// Pointer les éléments dont le innerText va changer au fil des questions
a_text = document.getElementById("a_text");
b_text = document.getElementById("b_text");
c_text = document.getElementById("c_text");
d_text = document.getElementById("d_text");
submit = document.getElementById("submit");
questionElement = document.getElementById("question");
// Suivre à quelle question on se trouve
let currentQuestion = 0;
// point de départ du score qui s'incrémente si réponse est vraie
let score = 0;
// Pointe tout les radios button des reponses
const answersEls = document.querySelectorAll(".answer");
// Pointe ver quiz ???
const quiz = document.getElementById("quiz");

// Appel fonction quiz (Appeler a chauqe fois que l'on submit)
loadQuiz();
// fonction charge un quizz
function loadQuiz() {
  deselectAnswers();
  // Savoir à quelle question on est dans le tableau d'objet du début
  let currentQuizData = quizData[currentQuestion];
  // La question affiché sera
  questionElement.innerText = currentQuizData.question;
  // Les Réponses possibles affichées
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

// Fonction désélectionné un reponse
function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Au clic sur le bouton submit lance cette fonction
submit.addEventListener("click", () => {
  const answer = getSelected();
  // Si une reponse existe on veut ...
  if (answer) {
    // Si la réponse utlisateur = la bonne réponse alors ...
    if (answer === quizData[currentQuestion].correct) {
      // Incrémenter le score de 1
      score++;
    }

    // Passer à la prochaine question..
    currentQuestion++;
    // Et si on est pas à la fin du quizz
    if (currentQuestion < quizData.length) {
      // puis relance le la fonction load quiz avec le prochain objet
      loadQuiz();
      // Sinon lancer l'alerte
    } else {
      //Montre le score au test
      window.alert('Attention ce quizz est à la limite du raisonnable quant aux normes sur la canaraderie')
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
      
      <button onclick="location.reload()">Reload</button>
  `;
    }
  }
});
