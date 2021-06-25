import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Output() title: string = " coming from a variable in second component";

  constructor() { }

  ngOnInit(): void {

  }

}
