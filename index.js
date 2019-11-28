// Lưu câu hỏi trong mảng
const Quizs = [
    {
        question: ' 1: Hãy xác định câu lệnh dùng để khởi tạo một Repository mới',
        answers: [
            'A. git create',
            'B. git add',
            'C. git init',
            'D. git commit'
        ],
        correct: 2
    },

    {
        question: ' 2: Để yêu cầu nhập dữ liệu cho một phần tử nào đó của form bạn sử dụng thuộc tính nào cho phần tử đó?',
        answers: [
            'A. notnull',
            'B. isrequired',
            'C. validate',
            'D. required'
        ],
        correct: 3
    },
    {
        question: ' 3: Biểu thức 2+5+"8" cho kết quả là?',
        answers: [
            'A. "78"',
            'B. undefined ',
            'C. "258"',
            'D. 15'
        ],
        correct: 0
    },
    {
        question: ' 4: Ai là người đẹp trai nhất lớp C1019i1?',
        answers: [
            'A. Trần Hải',
            'B. trần hải viết thường',
            'C. Vẫn là TRẦN HẢI nhưng in hoa',
            'D. Khó nghĩ, chắc là cả 3'
        ],
        correct: 3
    },{
        question: ' 5: Lệnh for nào thực hiện lặp 5 lần?',
        answers: [
            'A.  for( i=0; i<4; i++ )',
            'B.  for( i=0; i<5; i+=2 )',
            'C.  for( i=0; i<5; i++ )',
            'D.  for( i=0; i<6; i++ '
        ],
        correct: 2
    },{
        question: '6: Đâu là định nghĩa đúng về một hàm trong JavaScript?',
        answers: [
            'A. function.FunctionName()',
            'B. new FunctionName()',
            'C. function = FunctionName()',
            'D. function FunctionName()'
        ],
        correct: 3
    },{
        question: '7: Gọi hàm có tên là myFunction() như thế nào?',
        answers: [
            'A. call myFunction();',
            'B. exe myFunction();',
            'C. myFunction();',
            'D. myFunction;'
        ],
        correct: 2
    },{
        question: '8: Trong Javascript, phương thức nào dưới đây dùng để lấy một ký tự tại một vị trí xác định trong chuỗi?',
        answers: [
            'A. characterAt()',
            'B. indexOf()',
            'C. substr()',
            'D. charAt()'
        ],
        correct: 3
    },{
        question: '9: Đâu là mã đúng dùng để khai báo một mảng gồm 10 phần tử?',
        answers: [
            'A. var arr[10];',
            'B. var arr = new Array(10)',
            'C. var arr = new Array[10]',
            'D. var arr = new Array()'
        ],
        correct: 1
    },{
        question: '10: Mã lệnh nào cho phép sắp xếp một mảng tên là names trong JavaScript?',
        answers: [
            'A. names.ArraySort()',
            'B. names.bubbleSort()',
            'C. names.sort()',
            'D. Array.sort(names)'
        ],
        correct: 2
    },{
        question: '11: Lớp (class) là gì?',
        answers: [
            'A. Định nghĩa hành vi của một đối tượng',
            'B. Danh sách các đối tượng trong OOP',
            'C. Định nghĩa thuộc tính của một đối tượng',
            'D. Định nghĩa một tập các đối tượng có chung thuộc tính và hành vi'
        ],
        correct: 3
    },{
        question: '12: Phát biểu nào sau đây không đúng về ưu điểm của lập trình hướng đối tượng (OOP)',
        answers: [
            'A. Dữ liệu và mã lệnh phân tán.',
            'B. Ổn định và dễ bảo trì',
            'C. Khả năng tái sử dụng cao',
            'D. Khả năng tái sử dụng cao'
        ],
        correct: 0
    },{
        question: '13: Ý nghĩa của từ khóa "this" trong JavaScript?',
        answers: [
            'A. Không trường hợp nào đúng',
            'B. Chỉ đối tượng hiện tại',
            'C. Chỉ đối tượng trước đó',
            'D. Chỉ biến chứa giá trị'
        ],
        correct: 1
    },{
        question: '13: Ý nghĩa của từ khóa "this" trong JavaScript?',
        answers: [
            'A. Không trường hợp nào đúng',
            'B. Chỉ đối tượng hiện tại',
            'C. Chỉ đối tượng trước đó',
            'D. Chỉ biến chứa giá trị'
        ],
        correct: 1
    },
    {
        question: '14: Toán tử được sử dụng để tạo một đối tượng mới từ lớp được định nghĩa trước đó là gì?',
        answers: [
            'A. create',
            'B. function',
            'C. new ',
            'D. def'
        ],
        correct: 2
    },
    {
        question: '15: Quốc Dân có đẹp trai không',
        answers: [
            'A. Có',
            'B. Có Có',
            'C. Có Có Có ',
            'D. Cả 3 đáp án trên'
        ],
        correct: 3
    },

];
//Khai báo Clas Câu hỏi
let Quiz = function () {
    this.question = "";
    this.answers = [];
    this.correct = 0;

    this.setQuiz = function (ques, ans, correct) {
        this.question = ques;
        this.answers = ans;
        this.correct = correct;

    };
// lấy giá trị để hiển thị
    this.display = function () {
        document.getElementById("question").innerHTML = this.question;
        document.getElementById("0").innerHTML = this.answers[0];
        document.getElementById("1").innerHTML = this.answers[1];
        document.getElementById("2").innerHTML = this.answers[2];
        document.getElementById("3").innerHTML = this.answers[3];

    };

};
//bắt đầu chơi
let GameBoard = function () {
    this.quizs = [];
    this.currentQuiz = 0;
// hàm lấy phần tử câu hỏi
    this.creatQuizs = function () {
        for (let i = 0; i < Quizs.length; i++) {
            let quiz = new Quiz();
            console.log(quiz);
            quiz.setQuiz(Quizs[i].question, Quizs[i].answers, Quizs[i].correct);
            this.quizs.push(quiz);
        }

    };
    this.start = function () {
        document.getElementsByTagName("div")['prize'+game.currentQuiz]
            .setAttribute("class", "curentQuestion");
        this.creatQuizs();
        this.quizs[this.currentQuiz].display();
    };
    //thực hiện lấy phần tử tiếp theo của mảng câu hỏi
    this.nextQuiz = function () {
        this.currentQuiz++;
        haveChoosed = false;
        this.quizs[this.currentQuiz].display();
    };
};
//khai báo biến này để thay đổi màu khi onclick
let btn = false;
let idSelect = '';
let haveChoosed = false;

function resetColorAndStatusButton() {
    document.getElementsByTagName("button")[idSelect].setAttribute("class", "btn");
    btn = false;
    document.getElementById('alert').innerHTML =
        '';
}
// Hàm chuyển tiếp câu hỏi
function nextQuestion() {
    if (haveChoosed) {
        resetColorAndStatusButton();
        let temp = 'prize' + (game.currentQuiz + 1);
        document.getElementsByTagName("div")[temp]
            .setAttribute("class", "curentQuestion");
        game.nextQuiz();
    }
};
//Hàm bắt đầu lại game khi trả lời sai
function restart() {
    document.getElementById('conditionalButton').innerHTML=
"<button id='start-btn' class='start-btn btn' onclick='checkWin(id)'>Đồng Ý</button>" +
        "<button id='next-btn' class='next-btn btn hide'onclick='nextQuestion()'>Next</button>";
    resetColorAndStatusButton();
    let temp;
    for(let i = game.currentQuiz; i >= 0; i--) {
        temp = 'prize' + i;
        document.getElementsByTagName("div")[temp]
            .setAttribute("class", "score");
    }
    game.currentQuiz = 0;
    game.start();
}
// hàm set màu khi onclick
function changeColorButton(id) {
    if (!btn) {
        document.getElementsByTagName("button")[id].setAttribute("class", "colorSelect");
        btn = true;
        idSelect = id;
        checkWin(id);
    }
    ;
};
// Hàm check win
function checkWin(id) {
    haveChoosed = true;
    if (id == Quizs[game.currentQuiz].correct) {
        document.getElementById("alert").innerHTML =
            'Câu Trả Lời Chính Xác';
        document.getElementsByTagName("div")['prize'+game.currentQuiz]
            .setAttribute("class", "gotPrize");

    } else {

        alert("Rất tiếc, Câu trả lời của bạn chưa đúng");
        document.getElementById('conditionalButton').
            innerHTML = "<button id='restartButton'" +
            "class='start-btn btn' onclick='restart()'>Restart</button>"
    }
}

let game = new GameBoard();
game.start();
