import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { Projet } from "../models/projet.model";
import { ProjetRepository } from "../repository/projet.repository";
import { inject } from "@angular/core";

export class GetAllProjetUseCase implements UseCase <void,Projet[]>{
  projetRepository = inject(ProjetRepository);
  execute(): Observable<Projet[]> {
      return this.projetRepository.getAllProjets();
  }

}
