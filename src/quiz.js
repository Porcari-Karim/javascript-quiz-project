class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining){
        this.questions = [...questions];
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()
    getQuestion = () => this.questions[this.currentQuestionIndex];
    
    // 3. moveToNextQuestion()
    moveToNextQuestion(){
        this.currentQuestionIndex++;
    }

    // 4. shuffleQuestions()
    shuffleQuestions(){
        this.questions.sort((a, b) => 0.5 - Math.random());
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer){
        if(answer === this.getQuestion().answer) this.correctAnswers++;
    }

    // 6. hasEnded()
    hasEnded = () => this.currentQuestionIndex === this.questions.length;

    // Day 2 
    filterQuestionsByDifficulty(difficulty){
        if ([1,2,3].includes( difficulty)){
            this.questions = this.questions.filter(onequestion => onequestion.difficulty === difficulty)
        } 
        return this.questions
    }

    averageDifficulty() {
        return this.questions.reduce((accu,question) => accu + question.difficulty,0) / this.questions.length
    }



}