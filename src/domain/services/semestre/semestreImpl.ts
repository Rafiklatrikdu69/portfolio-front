import { map, Observable } from "rxjs";
import { Semestre } from "../../models/Semestre.model";
import { SemestreRepository } from "../../repository/semestre.repository";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";

export class SemestreImpl extends SemestreRepository{
  http = inject(HttpClient);
  url = environment.apiURL;
  override getAllSemestre(): Observable<Semestre[]> {
    return this.http.get<Semestre[]>(`${this.url}/semestre/get`)

  }

}
