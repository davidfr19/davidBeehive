import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  @Input() myCurrentBee;
  @Input() iAmBee;

  @Output() getCurrentPost = new EventEmitter;

  ngOnInit() {
  }

  currentPost(event){
      this.getCurrentPost.emit(event);

  }

}
