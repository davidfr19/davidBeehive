import { Component, OnInit, Input, Output } from '@angular/core';
import {Comment} from './../../models/comment';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  constructor() { }

  @Input() iAmBee;

  newComment:Comment;

  ngOnInit() {
  }

  @Output() sendComment;

  onTitleChange(event){
    this.newComment.setName(event.target.value);
  }

  onBodyChange(event){
    this.newComment.setBody(event.target.value);
  }

  onDone() {

    this.newComment.setId(4);
	  this.newComment.setPostId(4);
    this.newComment.setEmail(this.iAmBee.getEmail());
    this.sendComment.emit(this.newComment);
  }

  

}
