import { Routes } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ArticleComponent } from './article/article.component';
import { ArticleByFabricantComponent } from './article-by-fabricant/article-by-fabricant.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { ProduitByCtegorieComponent } from './produit-by-ctegorie/produit-by-ctegorie.component';
import { PanierComponent } from './panier/panier.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {path:'details/:id',title:'details',component:DetailProduitComponent},
  {path:'home',title:'home',component:ListeArticleComponent},
  {path:'article/:fabricant',title:'articleByFabricant',component:ArticleByFabricantComponent},
  {path:'Produit/:categorie',title:'ProduitByCategorie' ,component:ProduitByCtegorieComponent},
  {path:'panier',title:'panier',component:PanierComponent},
  {path:'signup',title:'signup',component:SignupComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];
