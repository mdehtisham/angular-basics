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
  templateObjFromFirst = {
    name: "john",
    country: "US",
    profile: "Software Engineer"
  }
  constructor() { }

  ngOnInit(): void {
  }

  sendObj(event: Object) {
    this.receivedObj = event
  }


}
