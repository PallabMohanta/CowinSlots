import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  goToSource() {
    window.location.href = 'https://www.google.co.in';
  }
  goToHome() {
    this._router.navigateByUrl('/home');
  }
}
