import { map, Observable } from "rxjs";
import { Projet } from "../../models/projet.model";
import { ProjetRepository } from "../../repository/projet.repository";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";

export class  ProjetImpl extends ProjetRepository{
  http = inject(HttpClient);
  url = environment.apiURL;
  override getAllProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.url}/projet/get`)
  }
}
