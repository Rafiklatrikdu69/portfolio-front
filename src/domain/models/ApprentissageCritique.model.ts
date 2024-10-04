import { Niveau } from "./Niveau.model";

export interface ApprentissageCritique {
    id_apprentissage: number;
    nom_apprentissage: string;
    description_apprentissage: string;
    poids_apprentissage: number;
    semestreCompetence: Niveau;
}
