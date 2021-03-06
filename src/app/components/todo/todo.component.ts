import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  @Input() todo;

  ngOnInit() {
  }


  todoCompleted(todo){
    todo.setCompleted(false);
  }

}
