import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  skills = [
    { image: '../../../assets/bootstrap.png', skill_name: 'boostrap' },
    { image: '../../../assets/css.jpeg', skill_name: 'CSS' },
    { image: '../../../assets/nodejs.png', skill_name: 'node.js' },
    { image: '../../../assets/angular.png', skill_name: 'Angular' },
    { image: '../../../assets/ionic.jpeg', skill_name: 'Ionic' },
    { image: '../../../assets/html5.png', skill_name: 'Html' },
    { image: '../../../assets/mongodb.png', skill_name: 'Mongodb' },
    { image: '../../../assets/postdres.png', skill_name: 'Postgres' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
