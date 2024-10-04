import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { Semestre } from "../models/Semestre.model";
import { inject } from "@angular/core";
import { SemestreRepository } from "../repository/semestre.repository";

export class GetAllSemestreUseCase implements UseCase<void,Semestre[]>{
  semestreRepository = inject(SemestreRepository)
  execute(): Observable<Semestre[]> {
    return this.semestreRepository.getAllSemestre();
  }
}
