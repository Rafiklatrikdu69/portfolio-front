import { Component, computed, inject, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { SemestreService } from '../../../domain/services/semestre/semestre.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CompetenceComponent } from "../competence/competence.component";
@Component({
  selector: 'app-list-competence',
  standalone: true,
  imports: [MatExpansionModule, AsyncPipe, JsonPipe, CompetenceComponent],
  templateUrl: './list-competence.component.html',
  styleUrl: './list-competence.component.css'
})
export class ListCompetenceComponent {
  readonly panelOpenState = signal(false);
  serviceSemestre= inject(SemestreService)
  SemestreCompetence$ = computed(()=>{
    return this.serviceSemestre.getAllSemestres()
  })
}
