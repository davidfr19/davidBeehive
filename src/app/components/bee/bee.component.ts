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

  @Output() sendBee = new EventEmitter();

  ngOnInit() {
  }

  showPost(bee){
    this.sendBee.emit(bee);

  }

  showAlbum(bee){
    this.sendBee.emit(bee);

  }

  showTodo(bee){
    this.sendBee.emit(bee);

  }

}
