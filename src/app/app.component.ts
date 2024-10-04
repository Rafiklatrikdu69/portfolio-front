import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjetService } from '../domain/services/projets/projet.service';
import { ListProjetsComponent } from "./components/list-projets/list-projets.component";
import { NavComponent } from "./components/nav/nav.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { ListeTechnosComponent } from "./components/liste-technos/liste-technos.component";
import { ListCompetenceComponent } from "./components/list-competence/list-competence.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListProjetsComponent, NavComponent, PresentationComponent, ListeTechnosComponent,ListCompetenceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

}
