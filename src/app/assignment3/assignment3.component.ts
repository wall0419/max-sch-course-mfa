import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {

  buttonLabel = 'Display Details';
  displayDetails = false;
  secretPassword = 'The secret password is: Tuna'
  btnClicks = [];
  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetails(){
    this.displayDetails = !this.displayDetails;
    this.btnClicks.push(new Date());
  }

}
