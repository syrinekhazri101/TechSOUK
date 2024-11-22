import { Component, inject } from '@angular/core';
import { ArticleComponent } from "../article/article.component";
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-liste-article',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './liste-article.component.html',
  styleUrl: './liste-article.component.css'
})
export class ListeArticleComponent {
  products:Produit[]=[];
  private readonly ProduitService:ProduitService=inject(ProduitService);
  ngOnInit():void{
    this.ProduitService.getProduits().subscribe(
      data=>this.products=data
    )
  }
}
