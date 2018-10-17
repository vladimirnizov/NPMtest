import { Component, OnInit, ViewChild, Output,  EventEmitter, ElementRef } from '@angular/core';
import { Card } from '../../models/card.model'

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  @Output('new') new = new EventEmitter();
  @ViewChild('name') nameInputRef: ElementRef;
  @ViewChild('subtitle') subtitleInputRef: ElementRef;
  @ViewChild('phone') phoneInputRef: ElementRef;
  @ViewChild('addPhone') addPhoneInputRef: ElementRef;
  card: Card = new Card('','','','','');

  constructor() { }

  ngOnInit() {
  }

  saveNew(){
    this.card.name=this.nameInputRef.nativeElement.value;
    this.card.subtitle=this.subtitleInputRef.nativeElement.value;
    this.card.phone=this.phoneInputRef.nativeElement.value;
    this.card.addPhone=this.addPhoneInputRef.nativeElement.value;
    this.new.emit(this.card);
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.card.image = reader.result;
  }
}
