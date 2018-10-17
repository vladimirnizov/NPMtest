import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Card } from '../../models/card.model'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  @Input() card: Card;
  @Output('edited') edited = new EventEmitter();
  @ViewChild('name') nameInputRef: ElementRef;
  @ViewChild('subtitle') subtitleInputRef: ElementRef;
  @ViewChild('phone') phoneInputRef: ElementRef;
  @ViewChild('addPhone') addPhoneInputRef: ElementRef;



  edit: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onEdit(){
    this.edit=!this.edit;

  }

  save(){
    this.card.name=this.nameInputRef.nativeElement.value;
    this.card.subtitle=this.subtitleInputRef.nativeElement.value;
    this.card.phone=this.phoneInputRef.nativeElement.value;
    this.card.addPhone=this.addPhoneInputRef.nativeElement.value;
    this.edited.emit(this.card);
  }

}
