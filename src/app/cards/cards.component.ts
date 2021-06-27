import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  posts = [
    { imageUrl: "assets/cat.jpg", title: "cat", content: "cat is a domestic animal" },
    { imageUrl: "assets/dog.jpg", title: "dog", content: "dog is also a domestic animal" },
    { imageUrl: "assets/dog.jpg", title: "dog", content: "dog is also a domestic animal" },
    { imageUrl: "assets/dog.jpg", title: "dog", content: "dog is also a domestic animal" },
    { imageUrl: "assets/dog.jpg", title: "dog", content: "dog is also a domestic animal" },
    { imageUrl: "assets/mouse.jpg", title: "mouse", content: "mouse is not a domestic animal" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
