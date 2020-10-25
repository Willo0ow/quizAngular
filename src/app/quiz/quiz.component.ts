import {Component} from '@angular/core';

@Component ({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent{
    answer = null;
    correct= false;
    step=  0;
    points = 0;
    info = '';
    done = false;
    questions = [
        {q:"2 + 2", answers:[{option: 'a', value :5},{option: 'b', value :10}, {option: 'c', value :4}, {option: 'd', value :0}], correct:'c'},
        {q:"How many sides has a square", answers:[{option: 'a', value :5},{option: 'b', value :3}, {option: 'c', value :2}, {option: 'd', value :4}], correct:'d'},
        {q:"You've got two apples. You ate one. How many apples do you have?", answers:[{option: 'a', value :0},{option: 'b', value :1}, {option: 'c', value :3}, {option: 'd', value :2}], correct:'b'},
    ];
    checkAnswer(){
        if(this.answer == this.questions[this.step].correct){
            this.points ++
            this.info = 'Correct!'
            this.correct = true
        } else {
            this.info = 'Incorrect :(. Try again.'
        }
    };
    nextQuestion(){
        let next = this.step + 1
        if(next>= this.questions.length){
            this.done = true
            this.info = `Your score is: ${this.points}/${this.questions.length}`
        }else {
            this.step ++
            this.answer = null
            this.correct = false
            this.info = ''
        }
    };
    newAtempt(){
        this.step = 0
        this.answer = null
        this.correct = null
        this.points = 0
        this.info = ''
        this.done = false
    }
}