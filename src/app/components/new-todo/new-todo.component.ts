import { Component, OnInit, Input } from '@angular/core';
import {Todo} from './../../models/todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor() { }

  title: string;

  @Input() myCurrentBee;

  ngOnInit() {
  }
  
  onTitleChange(event){
    this.title = event.target.value;
  }

  onDone(){

    var newTodo = new Todo(12,this.myCurrentBee.getId(),this.title,"false");
    this.myCurrentBee.addTodo(newTodo);
    this.title = '';
  }
  

}
