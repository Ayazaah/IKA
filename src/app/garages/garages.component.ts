import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Garage {
  id: number;
  nom: string;
  prixLocation: number;
  imageUrl: string;
  detailsVisible?: boolean;
}

@Component({
  selector: 'app-garages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './garages.component.html',
  styleUrls: ['./garages.component.css']
})
export class GaragesComponent {
  garages: Garage[] = [
    {
      id: 1,
      nom: 'Garage 2 places',
      prixLocation: 200,
      imageUrl: 'assets/2pl.png',
      detailsVisible: false
    },
    {
      id: 2,
      nom: 'Garage 5 places',
      prixLocation: 500,
      imageUrl: 'assets/6pl.png',
      detailsVisible: false
    },
    {
      id: 3,
      nom: 'Garage 10 places',
      prixLocation: 1000,
      imageUrl: 'assets/10pl.png',
      detailsVisible: false
    }
  ];

  toggleDetails(garage: Garage) {
    garage.detailsVisible = !garage.detailsVisible;
  }

  constructor(private router: Router){}
  
    onHome(){
      this.router.navigate(['/home']);
    }
  
}
