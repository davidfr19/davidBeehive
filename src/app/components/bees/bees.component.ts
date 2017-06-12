import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Bee} from './../../models/bee';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.scss']
})
export class BeesComponent implements OnInit {

  constructor() { }

  @Input() bees;

  @Output() getBee = new EventEmitter;

  ngOnInit() {
  }

  currentBee(bee){
    this.getBee.emit(bee);
    //console.log(bee);
  }

}
