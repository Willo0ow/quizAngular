import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz';
  begun = false;
  beginQuiz(){
    this.begun = true
  };
  stopQuiz(){
    this.begun = false
  }
}
