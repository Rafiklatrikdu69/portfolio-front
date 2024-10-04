import { Categorie } from "./Categorie.model";
import { Technology } from "./Technology.model";

export interface Projet {
    date: string;
    description: string;
    id_projet: number;
    image: string;
    nom_projet: string;
    technologies: Technology[];
    categorie: Categorie;
    git: string;
    descriptionplus: string;
}
