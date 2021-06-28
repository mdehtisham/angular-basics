import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  first = true;
  second = false;
  third = false;
  receivedObj: Object = {}
  constructor() { }

  ngOnInit(): void {
  }

  sendObj(event: Object) {
    this.receivedObj = event
  }

}
