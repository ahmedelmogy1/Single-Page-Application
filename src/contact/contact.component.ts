import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
input:any[]=["", "","",""]

chechV(n:number):boolean{
  if (this.input[n] !='') {
    return true;
  }
  else{
    return false;
  }

}

}
