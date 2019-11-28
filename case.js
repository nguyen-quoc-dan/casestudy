let Quiz = function () {
    this.question = "";
    this.answers = [];
    this.correct = 0;

    this.setQuiz = function (ques,ans,correct) {
        this.question = ques;
        this.answers = ans;
        this.correct = correct;
    }

    this.display = function () {
        document.getElementById("question").innerHTML = this.question;
        document.getElementById("0").innerHTML = this.answers[0];
        document.getElementById("1").innerHTML = this.answers[1];
        document.getElementById("2").innerHTML = this.answers[2];
        document.getElementById("3").innerHTML = this.answers[3];

    }
}

const Quizs = [
    {
        question: '1',
        answers: [
            'A. 2',
            'B. 3',
            'C. 4',
            'D. 5',
        ],
        correct: 3
    },

]

let GameBoard = function () {
    this.quizs= [];
    this.currentQuiz = 0;

    this.creatQuizs = function () {
        for (let i = 0; i < Quizs.length; i++) {
            let quiz = new Quiz();
            quiz.setQuiz(Quizs[i].question,Quizs[i].answers,Quizs[i].correct);
            this.quizs.push(quiz);
        }
    }
    this.start = function () {
        this.creatQuizs();
        this.quizs[this.currentQuiz].display();
    }
    this.nextQuiz = function () {
        this.currentQuiz++;
        this.quizs[this.currentQuiz].display();
    }
}

let game = new GameBoard();
quiz.setQuiz();
game.start();
