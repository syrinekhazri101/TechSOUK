import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from './../produit.service';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  router:Router=inject(Router);

OnNavigateToDetail(id:number){
  this.router.navigate(['/details',id])
}
@Input('produit')prod!:Produit;
}
