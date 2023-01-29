import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
