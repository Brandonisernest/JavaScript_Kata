const quizData = [
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is the President of US?',
    a: 'Donald Trump',
    b: 'Joe Biden',
    c: 'Ron Paul',
    d: 'Satoshi Nakamoto',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hot Things Move Lightly',
    c: 'Humorous Timmy Makes Laughter',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
  {
    question: 'What popular cartoon was created by Matt Groening?',
    a: 'South Park',
    b: 'The Simpsons',
    c: 'Powerpuff Girls',
    d: 'Samurai JAck',
    correct: 'b',
  },
  {
    question: 'Which CS Go Pro team won the 2021 Colonge Pro Finals',
    a: 'Virtus.Pro',
    b: 'Vitality',
    c: 'NaVi',
    d: 'Faze Clan',
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  console.log(quizData[currentQuiz]);
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function submitBtnHandler() {
  const selectedAnswer = getSelected();

  if (selectedAnswer) {
    if (selectedAnswer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizResults(score);

      // else {
      // quiz.innerHTML = `
      //       <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

      //       <button onclick="location.reload()">Reload</button>
      //   `;
    }
  }
}

function quizResults(score) {
  if (score < 3) {
    quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              <h2>LOW IQ MOON BOI...YOU EAT A GROSS HOT POCKET</h2  >
              <button onclick="location.reload()">Reload</button>
          `;
  } else {
    quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              <h2>95th PERCENTILE MOON BOI. YOU EAT SOMETHING NICE</h2  >
              <button onclick="location.reload()">Reload</button>
          `;
    // alert('WOW YOU EAT EVYERTHING!');
  }
  let newMealList = new MealList(score);
  newMealList.render();
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach(function (answerEl) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', submitBtnHandler);
