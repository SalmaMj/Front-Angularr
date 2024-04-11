import { User } from "./user";
import { Categorie } from "./categorie";
import { Options } from "./options";




export class Ressource {

  id: number | undefined;
  titre: string | undefined;
  description: string | undefined;
  typeFichier: string | undefined;
  tailleFichier: number | undefined;
  categorie: Categorie | undefined;
  dateTlg: Date | undefined;
  auteur: User | undefined;
  rating: number | undefined;
  filePath: string| undefined;
  options: Options |undefined; 


  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.titre = data.titre;
      this.description = data.description;
      this.typeFichier = data.typeFichier;
      this.tailleFichier = data.tailleFichier;
      this.categorie = data.categorie;
      this.options = data.options;
      this.dateTlg = new Date(data.dateTlg);
      this.auteur = data.auteur;
      this.rating = data.rating;
      this.filePath = data.filePath;
  
    }
}




  


}
