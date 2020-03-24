import {NiveauCompetence} 	from '../data/niveau_competence';
import {NiveauSort} 		from '../data/niveau_sort';
import {Arme} 				from '../data/arme';

export class Creature {
	nom: string;
	
	adresse: number;
	vivacite: number;
	vigueur: number;
	prestance: number;
	intelligence: number;
	intuition: number;
	bravoure: number;
	
	timeline: number;
	
	concentration: number;
	souffle: number;
	adrenaline: number;
	peur: number;
	moral: number;
	douleur: number;
	faim: number;
	fatigue: number;
	froid: number;	
	
	blessures: {};
	
	notes: string;
	
	competences: NiveauCompetence[];
	sorts: NiveauSort[];
	armes: Arme[];
}