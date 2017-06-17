import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from './../../models/post';

@Component({
  selector: 'app-bee-activity',
  templateUrl: './bee-activity.component.html',
  styleUrls: ['./bee-activity.component.scss']
})
export class BeeActivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  littlePost:Post;

  @Input() myCurrentBee;
  @Input() iAmBee;

  
  myPost(e){

    this.littlePost = e;

  }

}
