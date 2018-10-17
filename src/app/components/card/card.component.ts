import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../models/card.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() ind: number;
  @Output('getCard') getCard = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getCardByClick() {
    this.getCard.emit(this.ind);
 }

}
