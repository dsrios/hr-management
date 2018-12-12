import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  localStorage = localStorage.getItem('user_logged');

  constructor( private router: Router  ) { }

  ngOnInit() {
  }

  logout () {
    this.router.navigate(['/login']);
    localStorage.clear();
  }


}
