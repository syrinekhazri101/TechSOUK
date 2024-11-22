import { ProduitService } from './../produit.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../produit';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [NgClass],
  templateUrl: './detail-produit.component.html',
  styleUrl: './detail-produit.component.css'
})
export class DetailProduitComponent {
  produit!:Produit;
  idProduct!:number;
  private ProduitService:ProduitService=inject(ProduitService);
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  ngOnInit(){
    this.idProduct=Number(this.activatedRoute.snapshot.params["id"]);
    this.ProduitService.getProductById(this.idProduct).subscribe({
      next: (data) => this.produit = data,

    })
  }

  ajouterpanier(id:number){

   }
}
