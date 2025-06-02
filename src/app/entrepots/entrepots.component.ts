import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Entrepot {
  id: number;
  nom: string;
  prixLocation: number;       
  capaciteArmoires: number; 
  capaciteCoffre: number; 
  imageUrl: string;
}

@Component({
  selector: 'app-entrepots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrepots.component.html',
  styleUrls: ['./entrepots.component.css']
})
export class EntrepotsComponent {
  entrepots: Entrepot[] = [
    {
      id: 1,
      nom: 'Petit Entrepôt',
      prixLocation: 500,
      capaciteArmoires: 5000,
      capaciteCoffre: 100,
      imageUrl: 'assets/petit.png'
    },
    {
      id: 2,
      nom: 'Moyen Entrepôt',
      prixLocation: 1000,
      capaciteArmoires: 10000,
      capaciteCoffre: 100,
      imageUrl: 'assets/moyen.png'
    },
    {
      id: 3,
      nom: 'Grand Entrepôt',
      prixLocation: 1500,
      capaciteArmoires: 25000,
      capaciteCoffre: 100,
      imageUrl: 'assets/grand.png'
    }
  ];

  constructor(private router: Router){}
  
    onHome(){
      this.router.navigate(['/home']);
    }
}

