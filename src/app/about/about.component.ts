import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  name:string ="Germán Ponzio";
  category:string = "Full Stack Developer";

  // imagen de cara
  face: string = "C:\Users\Pc\Desktop\German\portfolioGP\src\assets\img\nueva1.jpeg"



}
