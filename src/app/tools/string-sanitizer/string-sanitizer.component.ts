import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-sanitizer',
  templateUrl: './string-sanitizer.component.html',
  styleUrls: ['./string-sanitizer.component.css']
})
export class StringSanitizerComponent implements OnInit {

  dirtyText = '';
  cleanText = '';

  constructor() { }

  ngOnInit(): void {
  }

  sanitize() {

    this.cleanText = this.dirtyText.replace(/[^a-zA-Z0-9]/g, "");

  }

}
