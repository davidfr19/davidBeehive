import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Comment} from './../../models/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  //comments:Comment[] = [];
 
  constructor() { }

  @Input() post;
  @Input() iAmBee;

  @Output() emmitPost = new EventEmitter;

  ngOnInit() {
  }

  sendPost(post){
    this.emmitPost.emit(post);
  }


}
