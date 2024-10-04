import { inject, Injectable } from '@angular/core';
import { GetAllSemestreUseCase } from '../../usecases/getAllSemestre.use-case';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  semestreUseCase = inject(GetAllSemestreUseCase);

  getAllSemestres(){
  return    this.semestreUseCase.execute();
  }
}
