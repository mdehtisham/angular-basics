import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  // to pass the data from child to parent we have to use event emitter
  // we can emit any type of data/object using emitter
  @Output() public sendObject = new EventEmitter<any>();
  name = 'Ehtisham';
  age = 26;
  templateObjFromSecond = {
    name: "jane",
    country: "Cannada",
    profile: "Test Engineer"
  }

  constructor() { }

  ngOnInit(): void {

  }

  sendObj() {
    this.sendObject.emit({ name: this.name, age: this.age })
  }

}
