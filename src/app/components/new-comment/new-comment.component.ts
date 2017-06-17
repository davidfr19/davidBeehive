import { Component, OnInit, Input} from '@angular/core';
import {Comment} from './../../models/comment';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  constructor() { }

  @Input() iAmBee;
  @Input() littlePost;

  body:string = '';
  title:string = '';

  ngOnInit() {
  }

  onTitleChange(event){
    this.title = event.target.value;
  }

  onBodyChange(event){
    this.body = event.target.value;
  }

  onDone() {
    var newComment = new Comment(12, this.littlePost.getId(), this.title, this.body, this.iAmBee.getEmail());
    this.littlePost.addComment(newComment);
    this.title = '';
    this.body = '';
  }

  

}
