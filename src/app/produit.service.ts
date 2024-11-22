import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpParams}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';
import { Categorie } from './categorie';
const URL="http://localhost:3000/produits";
const URL_CATEG="http://localhost:3000/categories"
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
navigate(arg0: string[]) {
  throw new Error('Method not implemented.');
}
private readonly http:HttpClient=inject(HttpClient);
public getProduits():Observable<Produit[]>{
return this.http.get<Produit[]>(URL);
}
getProductById(productId: number): Observable<Produit> {
  const url = `${URL}/${productId}`;
    return this.http.get<Produit>(url);
}
public getProduitByFabricant(fabricant:string):Observable<Produit[]>{

    const params = new HttpParams().set('fabricant', fabricant.charAt(0).toUpperCase() + fabricant.slice(1).toLowerCase());
    return this.http.get<Produit[]>(URL, { params });
  }

public getProductByCategorie(categId:number):Observable<Produit[]>{
  return this.http.get<Produit[]>(`${URL}?categId=${categId}`);
}
public getcategorie():Observable<Categorie[]>{
  return this.http.get<Categorie[]>(URL_CATEG)
}
totalPrix:number=0;
public CalculerPrix(PrixProduit:string){
  this.totalPrix+= (parseFloat(PrixProduit.replace(/[^\d,]/g, '').replace(',', '')))
  return this.totalPrix;

}
public gettotalPrix(){
  return this.totalPrix;
}
}

