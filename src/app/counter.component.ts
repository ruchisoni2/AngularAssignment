import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{
    public count = 0;
    constructor() { }
  
    ngOnInit(): void {
    }
    
    increaseCount() {
      return this.count = this.count + 1;
    }
  
    clearCount() {
      const intialVale = 0;
      return this.count = intialVale;
    }
}