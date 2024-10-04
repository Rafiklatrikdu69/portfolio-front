import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Projet } from '../../../domain/models/projet.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dialog-projet-description',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    JsonPipe
  ],
  templateUrl: './dialog-projet-description.component.html',
  styleUrl: './dialog-projet-description.component.css'
})
export class DialogProjetDescriptionComponent {
  readonly dialogRef = inject(MatDialogRef<DialogProjetDescriptionComponent>);
  readonly data = inject<{projet : Projet}>(MAT_DIALOG_DATA);
  readonly animal = model(this.data);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
