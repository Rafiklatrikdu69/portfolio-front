import { Observable } from "rxjs";
import { Categorie } from "../models/Categorie.model";
import { Technology } from "../models/Technology.model";

export abstract class CategorieRepository {
  abstract getAllCategoriesTechnos(): Observable<Categorie[]>;
}
