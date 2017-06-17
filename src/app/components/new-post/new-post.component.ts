import { Component, OnInit, Input } from '@angular/core';
import {Post} from './../../models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor() { }

  body:string = '';
  title:string = '';

  @Input() myCurrentBee;

  ngOnInit() {
  }

  onTitleChange(event){
    this.title = event.target.value;
  }

  onBodyChange(event){
    this.body = event.target.value;
  }

  onDone() {
    // var newComment = new Comment(12, this.post.getId(), this.title, this.body, this.iAmBee.getEmail());
    // this.post.addComment(newComment);
    var newPost = new Post(7, this.myCurrentBee.getId(), this.title, this.body);
    this.myCurrentBee.addPost(newPost);
    this.title = '';
    this.body = '';
  }

}
