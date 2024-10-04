import { Component, Input } from '@angular/core';
import { Technology } from '../../../../domain/models/Technology.model';

@Component({
  selector: 'techno',
  standalone: true,
  imports: [],
  templateUrl: './techno.component.html',
  styleUrl: './techno.component.css'
})
export class TechnoComponent {
  @Input() techno!:Technology
}
