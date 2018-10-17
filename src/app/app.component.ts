import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model'

const data: Array<Card> = [
  new Card('Вася Пупкин','Инженер','123456789','123','/assets/Bitmap.jpg'),
  new Card('Вася Пупкин','Инженер','123456789','123','/assets/Bitmap.jpg'),
  new Card('Вася Пупкин','Инженер','123456789','123','/assets/Bitmap.jpg')
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'npmGroupTest';
  index: number;
  currentCard: Card;
  newCard: boolean=false;
  plus: boolean=true;
  cards: Array<Card>


  constructor() { 
    if(localStorage.getItem("cardsData")==null){
    localStorage.setItem("cardsData", JSON.stringify(data))
    }
  }

  ngOnInit() {
    this.showAll();
  }

  showAll(){
    this.cards=new Array<Card>();
    JSON.parse(localStorage.getItem("cardsData")).forEach(element => {
      this.cards.push(new Card(element.name, element.subtitle, element.phone, element.addPhone, element.image))
    });
  }

  addNew(){
    this.plus=false;
    this.currentCard=null;
    this.newCard = true;
  }


  getCard(ind:number) {
   this.currentCard =  this.cards[ind];
   this.index=ind;
   this.newCard = false;

  }

  new(card: Card){
    this.cards.push(card)
    localStorage.setItem("cardsData", JSON.stringify(this.cards))
    this.newCard = false;
    this.plus=true;

  }

  edited(card: Card){
   this.currentCard=card;
   console.log(card);
   this.cards[this.index]=card;
   localStorage.setItem("cardsData", JSON.stringify(this.cards))
   this.currentCard=null;
   this.plus=true;



  }

}
