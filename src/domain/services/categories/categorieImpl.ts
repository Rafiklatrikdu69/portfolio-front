import { map, Observable } from "rxjs";
import { Categorie } from "../../models/Categorie.model";
import { CategorieRepository } from "../../repository/categorie.repository";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Technology } from "../../models/Technology.model";
import { Projet } from "../../models/projet.model";
import { environment } from "../../../environments/environment.development";

export class CategorieImpl extends CategorieRepository{
  http = inject(HttpClient);
  url = environment.apiURL;
  override getAllCategoriesTechnos(): Observable<any> {
    return this.http.get<Categorie[] >(`${this.url}/categorie`)
  }



}
