import { Component, Input } from '@angular/core';
import { Semestre } from '../../../domain/models/Semestre.model';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ProjetComponent } from "../list-projets/projet/projet.component";
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-competence',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    OrderByPipe,
    MatCardModule,
    MatDividerModule,
    ProjetComponent,
    MatTooltipModule
  ],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.css'
})
export class CompetenceComponent {
  @Input() semestre!:Semestre
}
