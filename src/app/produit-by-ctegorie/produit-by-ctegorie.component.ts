import { ProduitService } from './../produit.service';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Produit } from '../produit';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-produit-by-ctegorie',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './produit-by-ctegorie.component.html',
  styleUrl: './produit-by-ctegorie.component.css'
})
export class ProduitByCtegorieComponent {
  idCategoroie!:number;
  ListeProduit:Produit[]=[];
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  ProduitService:ProduitService=inject(ProduitService);
  ngOnInit(): void {

    this.idCategoroie=Number(this.activatedRoute.snapshot.params["categorie"]);
    console.log(this.idCategoroie);
    this.ProduitService.getProductByCategorie(this.idCategoroie).subscribe({
      next: (data) =>this.ListeProduit=data,

    })
  }
}
