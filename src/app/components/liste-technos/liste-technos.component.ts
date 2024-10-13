import { Component,computed, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';
import { CategorieService } from '../../../domain/services/categories/categorie.service';
import { AsyncPipe } from '@angular/common';
import { TechnoComponent } from "./techno/techno.component";
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'liste-technos',
  standalone: true,
  imports: [
    MatListModule,
    MatTabsModule,
    AsyncPipe,
    TechnoComponent,
    MatDividerModule
],
  templateUrl: './liste-technos.component.html',
  styleUrl: './liste-technos.component.css',
})
export class ListeTechnosComponent {
  categorieService = inject(CategorieService);

  technos$ = computed(()=>{
    return this.categorieService.getAllTechnology()
  })
}
