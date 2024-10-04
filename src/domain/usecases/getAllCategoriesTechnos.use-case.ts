import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { Projet } from "../models/projet.model";
import { ProjetRepository } from "../repository/projet.repository";
import { inject } from "@angular/core";
import { Technology } from "../models/Technology.model";
import { Categorie } from "../models/Categorie.model";
import { CategorieRepository } from "../repository/categorie.repository";

export class GetAllCategorieUseCase implements UseCase <void,Categorie[]>{
  categorieRepository = inject(CategorieRepository);
  execute(): Observable<Categorie[]> {
    return this.categorieRepository.getAllCategoriesTechnos();
  }


}
