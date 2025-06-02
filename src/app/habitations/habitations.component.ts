import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


interface Maison {
  id: number;
  nom: string;
  imageUrls: string[];

  locationSemaine: number;  
  achat: number;            
  capaciteArmoires: number; 
  capaciteCoffre: number;  
  detailsVisible?: boolean; 
}

@Component({
  selector: 'app-habitations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habitations.component.html',
  styleUrls: ['./habitations.component.css']
})
export class HabitationsComponent {
  maisons: Maison[] = [
    {
      id: 1,
      nom: 'Chambre de Motel',
      imageUrls: ['/assets/motel.png'],
      locationSemaine: 450,
      achat: 0,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false
    },
    {
      id: 2,
      nom: 'Appart 1',
      imageUrls: ['/assets/appart1.png'],
      locationSemaine: 800,
      achat: 40000,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false
    },
    {
      id: 3,
      nom: 'Appart 2',
      imageUrls: ['/assets/appart2.png'],
      locationSemaine: 1000,
      achat: 60000,
      capaciteArmoires: 300,
      capaciteCoffre: 100,
      detailsVisible: false
    },
    {
      id: 4,
      nom: 'Villa Moyenne',
      imageUrls: ['/assets/moyenne.png'],
      locationSemaine: 2000,
      achat: 80000,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false
    },
    {
      id: 5,
      nom: 'Villa Haute Gamme',
      imageUrls: ['/assets/hautdegamme.png'],
      locationSemaine: 2500,
      achat: 100000,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false
    },
    {
      id: 6,
      nom: 'Villa Moderne',
      imageUrls: ['/assets/Monochrome.png', '/assets/Vibrant.png', '/assets/Séduisant.png', '/assets/Moody.png', '/assets/Régal.png', '/assets/Aqua.png', '/assets/Pointu.png'],
      locationSemaine: 2500,
      achat: 120000,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false
    },
    {
      id: 7,
      nom: 'Villa 1',
      imageUrls: ['/assets/Gris.png', '/assets/Pourpre.png'],
      locationSemaine: 4000,
      achat: 160000,
      capaciteArmoires: 300,
      capaciteCoffre: 100,
      detailsVisible: false
    }
  ];

  constructor(private router: Router){}

  onHome(){
    this.router.navigate(['/home']);
  }


  // Pour chaque maison, on garde l'index de l'image courante dans un map (id maison => index image)
  currentImageIndex: Record<number, number> = {};

  // Retourne l'image actuelle pour une maison
  getCurrentImage(maison: Maison): string {
    if (!(maison.id in this.currentImageIndex)) {
      this.currentImageIndex[maison.id] = 0;
    }
    return maison.imageUrls[this.currentImageIndex[maison.id]];
  }

  // Passe à l'image précédente
  prevImage(maison: Maison) {
    if (!(maison.id in this.currentImageIndex)) {
      this.currentImageIndex[maison.id] = 0;
    }
    const index = this.currentImageIndex[maison.id];
    this.currentImageIndex[maison.id] = (index === 0) ? maison.imageUrls.length -1 : index -1;
  }

  // Passe à l'image suivante
  nextImage(maison: Maison) {
    if (!(maison.id in this.currentImageIndex)) {
      this.currentImageIndex[maison.id] = 0;
    }
    const index = this.currentImageIndex[maison.id];
    this.currentImageIndex[maison.id] = (index === maison.imageUrls.length -1) ? 0 : index +1;
  }

  toggleDetails(maison: Maison) {
    maison.detailsVisible = !maison.detailsVisible;
  }

  getImageName(imagePath: string): string {
    const fileName = imagePath.split('/').pop() || '';
    return fileName.split('.').slice(0, -1).join('.');
  }
}
