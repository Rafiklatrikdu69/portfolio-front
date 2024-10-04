import { inject, Injectable } from '@angular/core';
import { GetAllProjetUseCase } from '../../usecases/getAllProjets.use-case';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  getAllProjet = inject(GetAllProjetUseCase);

  getAllProjets(){
    return this.getAllProjet.execute();
  }
}
