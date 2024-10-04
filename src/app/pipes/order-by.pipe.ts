import { Pipe, PipeTransform } from '@angular/core';
import { Competence } from '../../domain/models/Competence.model';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {
  
  transform(value: Competence[], order: "asc" | "desc" = "asc"): Competence[] {
    return value.sort((a, b) => {
      if (order === "asc") {
        return a.nom_competence.localeCompare(b.nom_competence);
      } else if (order === "desc") {
        return b.nom_competence.localeCompare(a.nom_competence);
      }
      return 0;
    });
  }


}
