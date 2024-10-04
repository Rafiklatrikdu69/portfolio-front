import { Competence } from "./Competence.model";

export interface Semestre {
    id_semestre: number;
    nom_semestre: string;
    competences: Competence[];
}
