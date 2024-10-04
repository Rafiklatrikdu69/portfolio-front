import { Observable } from "rxjs";
import { Projet } from "../models/projet.model";

export abstract class ProjetRepository {
 abstract getAllProjets(): Observable<Projet[]>;
}
