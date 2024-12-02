import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  print(e: any): void {
    console.log(e);
  }

  photo: string[] = [
    './assets/imgs/poert1.png',
    './assets/imgs/port2.png',
    './assets/imgs/port3.png',
  ];
   
  photoChoosed:string=""
  choosePhoto(photo: string): void {
    this.photoChoosed=photo
    
  }
   close:boolean=true
  checker(state:boolean):boolean{
    this.close=state
    return this.close
  }
}
