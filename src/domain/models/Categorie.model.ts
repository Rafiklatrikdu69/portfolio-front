import { Technology } from "./Technology.model";

export interface Categorie {
    id_cat: number;
    nom_cat: string;
    technologies: Technology[];
}
