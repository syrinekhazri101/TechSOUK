import { Panier } from "./panier";

export class Compte {
  constructor( public nom_complet:string , public adresse_email:string,public mot_de_passe: string, total_prix: number ,panier?: Panier[]){};
}




