import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-registro',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './css/style.min.css',
    './plugins/chartist-js/dist/chartist.min.css',
    './plugins/chartist-js/dist/chartist-init.css',
    './plugins/chartist-plugin-tooltip-master/dist/chartist-plugin-tooltip.css',
    './plugins/c3-master/c3.min.css'
  ],
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}