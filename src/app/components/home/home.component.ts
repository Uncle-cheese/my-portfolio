import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

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

  services=[
    {images:'../../../assets/WebDevelopment.svg',name:'Web Development',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia dolorum'},

    {images:'../../../assets/Cleancode.svg',
    name:'Clean Code',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia dolorum'},

    {images:'../../../assets/phone.svg',
    name:'Responsive Design',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia dolorum'},
  ]

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  goToSection(target:any){
    console.log("to",target);
 this.scroller.scrollToAnchor(target);
  }
}
