import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  rate : number = 67;
  famount : number = 0;
  location : string = "Chennai";
  currency : string = "US DOLLOR";
  cardtype : string = "FOREX CARD";
  inramount : number = 0;

   constructor() {

     }

  ngOnInit() {
  }

  selectlocation(args){
    this.location = args.target.options[args.target.selectedIndex].text;
  }
  selectCurrency(args){
    this.currency = args.target.options[args.target.selectedIndex].text;
  }
  selectCard(args){
    this.cardtype = args.target.options[args.target.selectedIndex].text;
  }

addProduct(){
  console.log(this.location + " " + " " + this.currency + " " + this.cardtype);
}

}
