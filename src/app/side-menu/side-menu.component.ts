import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  active = 'nav-link active';
  normal = 'nav-link';

  menu = require('../../assets/menu.json');

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
