import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

columns: string[];
  constructor(private atService: CartService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns(); 
  }

}
