import { Component, computed, inject, model, signal } from '@angular/core';
import { ProjetService } from '../../../domain/services/projets/projet.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ProjetComponent } from "./projet/projet.component";
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogProjetDescriptionComponent } from '../dialog-projet-description/dialog-projet-description.component';
import { Projet } from '../../../domain/models/projet.model';

@Component({
  selector: 'list-projets',
  standalone: true,
  imports: [AsyncPipe, ProjetComponent,MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './list-projets.component.html',
  styleUrl: './list-projets.component.css'
})
export class ListProjetsComponent {
  serviceProjet = inject(ProjetService)
  projet$ = computed(()=>{
    return this.serviceProjet.getAllProjets()
  })




}


