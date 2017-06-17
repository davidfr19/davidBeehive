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

  showBeeInfo(bee){
    this.sendBee.emit(bee);
  }


}
