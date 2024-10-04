import { Niveau } from "./Niveau.model";
import { Projet } from "./projet.model";

export interface Competence {
    id_competence: number;
    nom_competence: string;
    description: string;
    projet: Projet;
    niveauCompetence: Niveau;
}
