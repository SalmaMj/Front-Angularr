
import { Ressource } from "./ressource";

import { TypeUser } from "./TypeUser";


export class User {

  id?: number;
  nom: string | undefined;
  prenom: string | undefined;
  email: string | undefined;
  password: string | undefined;
  role: TypeUser | undefined;
  photo: string | undefined;
  ressourcesPubliees?: Ressource[];

}
