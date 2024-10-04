import { Component, inject, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Projet } from '../../../../domain/models/projet.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogProjetDescriptionComponent } from '../../dialog-projet-description/dialog-projet-description.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'projet',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    AsyncPipe
  ],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {
  @Input() projet!:Projet;

  readonly dialog = inject(MatDialog);

  openDialog(projet:Projet): void {
    const dialogRef = this.dialog.open(DialogProjetDescriptionComponent, {
      data: {projet: projet},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
