import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetAllCategorieUseCase } from '../../usecases/getAllCategoriesTechnos.use-case';

@Injectable({
  providedIn: 'root'
})
export class CategorieService
{
  categoriUseCase = inject(GetAllCategorieUseCase)
  getAllTechnology (){
    return this.categoriUseCase.execute();
  }
}
