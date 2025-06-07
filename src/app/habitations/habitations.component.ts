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
  nmVisible?: boolean;

  nm: boolean;
  locationNm: number;
  venteNm: number;
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
      detailsVisible: false,
      nmVisible: false,
      nm: false,
      locationNm: 0,
      venteNm: 0
    },
    {
      id: 2,
      nom: 'Appart 1',
      imageUrls: ['/assets/appart1.png'],
      locationSemaine: 800,
      achat: 40000,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false,
      nmVisible: false,
      nm: false,
      locationNm: 0,
      venteNm: 0
    },
    {
      id: 3,
      nom: 'Appart 2',
      imageUrls: ['/assets/appart2.png'],
      locationSemaine: 1000,
      achat: 60000,
      capaciteArmoires: 300,
      capaciteCoffre: 100,
      detailsVisible: false,
      nmVisible: false,
      nm: false,
      locationNm: 0,
      venteNm: 0
    },
    {
      id: 4,
      nom: 'Villa Moyenne',
      imageUrls: ['/assets/moyenne.png'],
      locationSemaine: 3000,
      achat: 80000,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false,
      nmVisible: false,
      nm: false,
      locationNm: 0,
      venteNm: 0
    },
    {
      id: 5,
      nom: 'Villa Haute Gamme',
      imageUrls: ['/assets/hautdegamme.png'],
      locationSemaine: 3500,
      achat: 100000,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false,
      nmVisible: false,
      nm: false,
      locationNm: 0,
      venteNm: 0
    },
    {
      id: 6,
      nom: 'Villa Moderne',
      imageUrls: ['/assets/Monochrome.png', '/assets/Vibrant.png', '/assets/Séduisant.png', '/assets/Moody.png', '/assets/Régal.png', '/assets/Aqua.png', '/assets/Pointu.png'],
      locationSemaine: 3000,
      achat: 120000,
      capaciteArmoires: 200,
      capaciteCoffre: 100,
      detailsVisible: false,
      nmVisible: false,
      nm: false,
      locationNm: 0,
      venteNm: 0
    },
    {
      id: 7,
      nom: 'Villa 1',
      imageUrls: ['/assets/Gris.png', '/assets/Pourpre.png'],
      locationSemaine: 5000,
      achat: 160000,
      capaciteArmoires: 300,
      capaciteCoffre: 100,
      detailsVisible: false,
      nmVisible: false,
      nm: false,
      locationNm: 0,
      venteNm: 0
    },
    {
      id: 8,
      nom: 'Appartement Cosy',
      imageUrls: ['/assets/appartCosy.png'],
      locationSemaine: 2000,
      achat: 80000,
      capaciteArmoires: 0,
      capaciteCoffre: 0,
      detailsVisible: false,
      nmVisible: false,
      nm: true,
      locationNm: 1500,
      venteNm: 70000
    },
    {
      id: 9,
      nom: 'Appartement Contemporain',
      imageUrls: ['/assets/appartContemporain.png'],
      locationSemaine: 2000,
      achat: 80000,
      capaciteArmoires: 0,
      capaciteCoffre: 0,
      detailsVisible: false,
      nmVisible: false,
      nm: true,
      locationNm: 1500,
      venteNm: 70000
    },
    {
      id: 10,
      nom: 'Maison Contemporaine',
      imageUrls: ['/assets/contemporaine1.png','/assets/contemporaine2.png'],
      locationSemaine: 3000,
      achat: 100000,
      capaciteArmoires: 0,
      capaciteCoffre: 0,
      detailsVisible: false,
      nmVisible: false,
      nm: true,
      locationNm: 2500,
      venteNm: 90000
    },
    {
      id: 11,
      nom: 'Maison Design',
      imageUrls: ['/assets/design1.png','/assets/design2.png'],
      locationSemaine: 3500,
      achat: 120000,
      capaciteArmoires: 0,
      capaciteCoffre: 0,
      detailsVisible: false,
      nmVisible: false,
      nm: true,
      locationNm: 3000,
      venteNm: 110000
    },
    {
      id: 12,
      nom: 'Maison Montagne',
      imageUrls: ['/assets/montagne1.png','/assets/montagne2.png'],
      locationSemaine: 4000,
      achat: 160000,
      capaciteArmoires: 0,
      capaciteCoffre: 0,
      detailsVisible: false,
      nmVisible: false,
      nm: true,
      locationNm: 3500,
      venteNm: 150000
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
