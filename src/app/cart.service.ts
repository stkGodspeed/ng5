import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class CartService {

  constructor() { }

  getColumns(): string[]{
  return ["currency", "Product", "Forex Amount", "INR Amount", "Action"]
};

}
