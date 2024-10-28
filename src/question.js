class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)
    constructor(text, choices, answer, difficulty){
        this.text = text;
        this.choices = [...choices];
        this.answer = answer;
        this.difficulty = difficulty;

    }
    // 2. shuffleChoices()
    shuffleChoices() {
        this.choices.sort((a, b) => 0.5 - Math.random());
        // const updatedChoices =  [];
        // for(let i = this.choices.length; i > 0; i--){
        //     let randomIndex = Math.floor(Math.random() * this.choices.length);
        //     updatedChoices.push(this.choices[randomIndex]);
        //     this.choices.splice(randomIndex, 1);
        // }        
        // this.choices = updatedChoices;
    }
}