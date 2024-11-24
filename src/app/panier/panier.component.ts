import { Panier } from './../panier';
import { Produit } from '../produit';
import { ProduitService } from './../produit.service';
import { Component, inject } from '@angular/core';
import { Compte } from '../compte';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
produitService:ProduitService=inject(ProduitService);
listeProduit:Panier[]=[];
nom!:any;
ngOnInit(): void {
this.nom=localStorage.getItem('nom');
this.produitService.getPanier(this.nom).subscribe(data=>{
  this.listeProduit=data
console.log(this.listeProduit[0])
})
}

}
