import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/pt/4/49/Osorio_EE-T2.jpg',
      description: 'Tanque osorio'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Bundesarchiv_Bild_101I-554-0872-35%2C_Tunesien%2C_Panzer_VI_%28Tiger_I%29.jpg',
      description: 'Tanque tiger'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/T29_Heavy_Tank.png',
      description: 'Tanque t29'
    },
  ]  
}
