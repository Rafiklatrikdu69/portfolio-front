import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { GetAllProjetUseCase } from '../domain/usecases/getAllProjets.use-case';
import { ProjetRepository } from '../domain/repository/projet.repository';
import { ProjetImpl } from '../domain/services/projets/ProjetImpl';
import { GetAllCategorieUseCase } from '../domain/usecases/getAllCategoriesTechnos.use-case';
import { CategorieRepository } from '../domain/repository/categorie.repository';
import { CategorieImpl } from '../domain/services/categories/categorieImpl';
import { GetAllSemestreUseCase } from '../domain/usecases/getAllSemestre.use-case';
import { SemestreRepository } from '../domain/repository/semestre.repository';
import { SemestreImpl } from '../domain/services/semestre/semestreImpl';
function projetUseCaseFactory (){
  return new GetAllProjetUseCase()
}

export const projetUseCaseProvider = {
  provide: GetAllProjetUseCase,
  useFactory: projetUseCaseFactory,
  deps: [ProjetRepository],
};
export const repoProjetProvider = {
provide:ProjetRepository,
useClass:ProjetImpl
}


function CategorieUseCaseFactory (){
  return new GetAllCategorieUseCase()
}

export const categorieUseCaseProvider = {
  provide: GetAllCategorieUseCase,
  useFactory: CategorieUseCaseFactory,
  deps: [CategorieRepository],
};
export const repoCategorieProvider = {
  provide:CategorieRepository,
  useClass:CategorieImpl
  }

  //

  function SemestreUseCaseFactory (){
    return new GetAllSemestreUseCase()
  }
export const repoSemestreProvider = {
provide:SemestreRepository,
useClass:SemestreImpl
}

export const semestreUseCaseProvider = {
  provide: GetAllSemestreUseCase,
  useFactory: SemestreUseCaseFactory,
  deps: [SemestreRepository],
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideAnimationsAsync(),
    provideHttpClient(),
    projetUseCaseProvider,
    repoProjetProvider,
    categorieUseCaseProvider,
    repoCategorieProvider,
    repoSemestreProvider,
    semestreUseCaseProvider
  ]
};
