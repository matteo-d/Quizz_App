// Tableau contenant des Objet 

const quizData = [
// Chaque objet contient une question, 4 posibilité de réponse et la réponse correcte
    {
        question: 'Qui est la plus bellisima ?',
        a:'Julie',
        b:'Angelina Joli', 
        c:'Robert',
        d:'Mattéo',
        correct: a
    },
    {
        question: "Qui est la plus mim's ?",
        a:'Julie saoul',
        b:'Julie qui dort', 
        c:'Julie qui est saoulée',
        d:'Julie TOUT LE TEMPS ! ',
        correct: d
    },
    {
        question: 'Qui va réussir son permis demain ?',
        a:'La seule et unique, JULIE',
        b:'Alain prost', 
        c:'Ayrton Senna',
        d:'Mickael Jackson',
        correct: c
    },
    {
        question: 'Meilleur morceau de la Julie ?',
        a:'Le menton',
        b:'Les fesses', 
        c:'Les oreilles',
        d:'Le coeur (annnnnnw kro chou)',
        correct: b
    }
];
// Pointer les éléments dont le innerText va changer au fil des questions
a_text = document.getElementById('a_text');
b_text = document.getElementById('b_text');
c_text = document.getElementById('c_text');
d_text = document.getElementById('d_text');
submit = document.getElementById('submit');
questionElement = document.getElementById('question');
// Suivre à quelle question on se trouve 

let currentQuestion = 0;

// Appel fonction quiz (Appeler a chauqe fois que l'on submit)
loadQuiz();
   


function loadQuiz() {
 // Savoir à quelle question on est dans le tableau d'objet du début
 let currentQuizData = quizData[currentQuestion];
 // La question affiché sera 
 questionElement.innerText = currentQuizData.question;
// Réponses possibles affichées 
 a_text.innerText = currentQuizData.a;
 b_text.innerText = currentQuizData.b;
 c_text.innerText = currentQuizData.c;
 d_text.innerText = currentQuizData.d;
 // Passage au prochain objet du tableau quizData
}

function getSelected() {

    const answers = document.querySelectorAll(".answer");

    answers.forEach(answer => {
        console.log(answer.value);
    });
}


// Au clic sur le bouton submit 
submit.addEventListener('click',() => {
    
    // incrémentation current question
    currentQuestion++; 
    //
    getSelected();
    //  
    if(currentQuestion < quizData.length ) {
        // puis relance le la fonction load quiz avec le prochain objet
    loadQuiz();
    }
    else {
        //Montre le score au test 
        alert('tu as finis le test, ton score est de .....')
    }
    
}); 