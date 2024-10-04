import { Observable } from "rxjs";
import { Semestre } from "../models/Semestre.model";

export abstract class SemestreRepository {
  abstract getAllSemestre():Observable<Semestre[]>;
}
