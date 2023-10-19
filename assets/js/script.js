document.addEventListener("DOMContentLoaded", () => {
    // Array of objects for questions and correct answers
    const questions = [
        {
            question: "What's 2 + 2?",
            correctAnswer: 4,
            incorrectAnswers: [77, 24, 32]
        },
        {
            question: "Which fruit begins with 'A'?",
            correctAnswer: "Apple",
            incorrectAnswers: ["Pear", "Banana", "Orange"]
        }
    ]

    let answerDivs = [];

    // Variable for question board
    const questionBoard = document.getElementById('question-board');

    for (let i = 0; i < questions.length; i++) {
        const correctAnswer = questions[i].correctAnswer;
        const correctAnswerDiv = document.createElement('div');
        correctAnswerDiv.classList.add("col-12", "col-md-6", "col-lg-3");
        correctAnswerDiv.dataset.correctAnswer = true;
        correctAnswerDiv.textContent = correctAnswer;
        questionBoard.appendChild(correctAnswerDiv);
        answerDivs.push(correctAnswerDiv);
    }
    console.log(answerDivs);
});