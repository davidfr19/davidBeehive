import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Bee} from './../../models/bee';

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.scss']
})
export class BeeComponent implements OnInit {

  constructor() { }

  @Input() bee;
  @Input() showArray;

  @Output() sendBee = new EventEmitter();

  ngOnInit() {
  }

  showBeeInfo(bee){
    this.sendBee.emit(bee);
    this.showArray[0]= true;
    this.showArray[1]= true;
    this.showArray[2]= true;
  }

  showPosts(){
    this.showArray[0]= true;
    this.showArray[1]= false;
    this.showArray[2]= false;
  }

  showAlbum(){
    this.showArray[0]= false;
    this.showArray[1]= true;
    this.showArray[2]= false;
  }

  showTodo(){
    this.showArray[0]= false;
    this.showArray[1]= false;
    this.showArray[2]= true;
  }


}
