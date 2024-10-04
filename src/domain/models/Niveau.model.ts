import { ApprentissageCritique } from "./ApprentissageCritique.model";

export interface Niveau {
    id_niveau: number;
    nom_niveau: string;
    apprentissages: ApprentissageCritique[];
}
