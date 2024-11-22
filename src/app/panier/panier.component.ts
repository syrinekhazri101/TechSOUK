import { Produit } from '../produit';
import { ProduitService } from './../produit.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
produitService:ProduitService=inject(ProduitService);
listeProduit:Produit[]=[];
ngOnInit(): void {
  
}

}
