import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Creature} from '../data/creature';
import {Arme} from '../data/arme';
import {NiveauCompetence} from '../data/niveau_competence';
import {NiveauSort} from '../data/niveau_sort';
import {DataService} from '../data/data.service';
import {DeService} from '../des/de.service';
import {ReactivitePipe} from './reactivite.pipe';
import {OrderByPipe} from '../commun/orderBy.pipe';

@Component({
  selector: 'combattant',
  styleUrls: ['./combattant.component.css'],
  templateUrl: './combattant.component.html'
})
export class CombattantComponent implements OnInit {
	
	@Input()
	combattant: Creature;
	
	@Output() onDeleted = new EventEmitter<Creature>();
	
	@Output() onMessage = new EventEmitter<string[]>();
	
	reactPipe: ReactivitePipe = new ReactivitePipe();
	
	sorts;
	competences;
	armes;
	
	selectedSkill;
	helpedSkill: NiveauCompetence;
	selectedSpell;
	helpedSpell: NiveauSort;
	selectedArme;
	helpedWeapon : Arme;
	
	constructor (private dataService: DataService, private deService: DeService) {}
	
	ngOnInit() {
		this.dataService.sorts.subscribe((sorts) => {this.sorts = sorts; this.selectedSpell=this.sorts[0];});
		this.dataService.competences.subscribe((competences) => {this.competences = competences; this.selectedSkill=this.competences[0];});
		this.dataService.armes.subscribe((armes) => {this.armes = armes; this.selectedArme=this.armes[0];});
		
		
		
		if (this.combattant.concentration == null) {
			this.combattant.concentration = 5;
		}
		if (this.combattant.souffle == null) {
			this.combattant.souffle = 5;
		}
		if (this.combattant.adrenaline == null) {
			this.combattant.adrenaline = 0;
		}
		if (this.combattant.faim == null) {
			this.combattant.faim = 0;
		}
		if (this.combattant.fatigue == null) {
			this.combattant.fatigue = 0;
		}
		if (this.combattant.moral == null) {
			this.combattant.moral = 3;
		}
		if (this.combattant.douleur == null) {
			this.combattant.douleur = 0;
		}
		if (this.combattant.peur == null) {
			this.combattant.peur = 0;
		}
		if (this.combattant.froid == null) {
			this.combattant.froid = 0;
		}
		
		if (this.combattant.blessures == null) {
			this.combattant.blessures = {};
			this.combattant.blessures['tete'] = [];
			this.combattant.blessures['tete'][0] = false;
			this.combattant.blessures['tete'][1] = false;
			this.combattant.blessures['tete'][2] = false;
			this.combattant.blessures['tete'][3] = false;
			this.combattant.blessures['tete'][4] = false;
			
			this.combattant.blessures['torse'] = [];
			this.combattant.blessures['torse'][0] = false;
			this.combattant.blessures['torse'][1] = false;
			this.combattant.blessures['torse'][2] = false;
			this.combattant.blessures['torse'][3] = false;
			this.combattant.blessures['torse'][4] = false;
			
			this.combattant.blessures['bras_droit'] = [];
			this.combattant.blessures['bras_droit'][0] = false;
			this.combattant.blessures['bras_droit'][1] = false;
			this.combattant.blessures['bras_droit'][2] = false;
			this.combattant.blessures['bras_droit'][3] = false;
			this.combattant.blessures['bras_droit'][4] = false;
			
			this.combattant.blessures['bras_gauche'] = [];
			this.combattant.blessures['bras_gauche'][0] = false;
			this.combattant.blessures['bras_gauche'][1] = false;
			this.combattant.blessures['bras_gauche'][2] = false;
			this.combattant.blessures['bras_gauche'][3] = false;
			this.combattant.blessures['bras_gauche'][4] = false;
			
			this.combattant.blessures['jambe_droite'] = [];
			this.combattant.blessures['jambe_droite'][0] = false;
			this.combattant.blessures['jambe_droite'][1] = false;
			this.combattant.blessures['jambe_droite'][2] = false;
			this.combattant.blessures['jambe_droite'][3] = false;
			this.combattant.blessures['jambe_droite'][4] = false;
			
			this.combattant.blessures['jambe_gauche'] = [];
			this.combattant.blessures['jambe_gauche'][0] = false;
			this.combattant.blessures['jambe_gauche'][1] = false;
			this.combattant.blessures['jambe_gauche'][2] = false;
			this.combattant.blessures['jambe_gauche'][3] = false;
			this.combattant.blessures['jambe_gauche'][4] = false;			
		}
		
		if (this.combattant.notes == null)
			this.combattant.notes = "";

		if (this.combattant.timeline == null) {
			this.combattant.timeline = this.reactPipe.transform(this.combattant.vivacite);
		}
	}
	
	delete() {
		this.onDeleted.emit(this.combattant);
	}
	
	jaugeChange(event) {
		return event.valeur;
	}
	
	addSkill() {
		let c = new NiveauCompetence();
		c.niveau = 1;
		c.competence = this.selectedSkill;
		this.combattant.competences.push(c);
	}
	
	addSpell() {
		let c = new NiveauSort();
		c.niveau = 1;
		c.sort = this.selectedSpell;
		this.combattant.sorts.push(c);
	}
	
	addArme() {
		if (this.combattant.armes == null) {
			this.combattant.armes = new Array();
		}
		console.log(this.combattant);
		this.combattant.armes.push(this.selectedArme);
	}
	
	removeArme(arme) {
		var index = this.combattant.armes.indexOf(arme, 0);
		if (index > -1) {
		   this.combattant.armes.splice(index, 1);
		}
	}
	
	helpComp(comp: NiveauCompetence) {
		this.helpedSkill = comp;
		console.log(this.helpedSkill);
	}
	
	helpSpell(sort: NiveauSort) {
		this.helpedSpell = sort;
		console.log(this.helpedSpell);
	}

	helpWeapon(arme: Arme) {
		this.helpedWeapon = arme;
		console.log(this.helpedWeapon);
	}
	
	closeHelp() {
		this.helpedSkill = null;
		this.helpedSpell = null;
		this.helpedWeapon = null;
	}

	lancerTest(carac: string){
		let messages :string[] = [];
		let res = this.deService.lancerDe(20);

		let de = "de ";
		if (carac.startsWith("a") || carac.startsWith("i")) {
			de = "d'";
		}
		messages.push("<b>"+this.combattant.nom + "</b> <i>jet " + de+carac+"</i>");
		messages.push(this.combattant[carac] + " + " + res + " = " + (this.combattant[carac]*1 + res));

		messages.push("- - - - - - - - - - -");
		this.onMessage.emit(messages);
	}

	lancerTestDouleur(type: string){
		let messages :string[] = [];
		let res = this.deService.lancerDe(20);
		let total = this.combattant.vigueur*1 + res;

		messages.push("<b>"+this.combattant.nom + "</b> <i>test douleur (" + type + ")</i>");
		messages.push(this.combattant.vigueur*1 + " + " + res + " = " + (total));

		let seuil = 25;
		if (type === "grave") {
			seuil = 30;
		}
		if (type === "critique") {
			seuil = 35;
		}

		if (total >= seuil) {
			messages.push("test réussi : " + total + " > " + seuil);
		} else {
			messages.push("test échoué : " + total + " < " + seuil);
			this.combattant.douleur ++;
		}
		messages.push("- - - - - - - - - - -");
		this.combattant.adrenaline ++;
		this.onMessage.emit(messages);
	}
	
	useComp(comp: NiveauCompetence) {
		console.log(comp);
		
			
		let messages :string[] = [];
		
		//regeneration
		//TODO traiter le cas des réactions (parade/esquive/...)
		if (comp.competence.nom != "Parer" && comp.competence.nom != "Esquiver" && comp.competence.nom != "Résister à un sort" && comp.competence.nom != "Encaisser un coup") {
			this.combattant.concentration += 2;
			if (this.combattant.concentration > 5) {
				this.combattant.concentration = 5;
			}			
			this.combattant.souffle += 2;
			if (this.combattant.souffle > 5) {
				this.combattant.souffle = 5;
			}	
		}
		
		let nivComp = this.getNiveauCompetence(comp);
		messages.push("<b>"+this.combattant.nom + "</b> <i>" + comp.competence.nom + "("+ comp.niveau +")</i>");
		
		if (nivComp.execution >= 0) {		
			let reactivite = this.reactPipe.transform(this.combattant.vivacite);
			this.combattant.timeline = this.combattant.timeline*1 + reactivite + nivComp.execution*1;
			messages.push("execution: " + reactivite + " + " + nivComp.execution + " = " + (reactivite + nivComp.execution*1));
		}
		
		if (nivComp.concentration > 0) {
			messages.push("concentration -" + nivComp.concentration);
			this.combattant.concentration -= nivComp.concentration*1;
			
			if (this.combattant.concentration < 0) {
				this.combattant.concentration = 0;
			}
		}
		if (nivComp.souffle > 0) {
			messages.push("souffle -" + nivComp.souffle);
			this.combattant.souffle -= nivComp.souffle*1;
			
			
			if (this.combattant.souffle < 0) {
				this.combattant.souffle = 0;
			}
		}
		if (nivComp.adrenaline > 0) {
			this.combattant.adrenaline -= nivComp.adrenaline*1;
			messages.push("adrenaline -" + nivComp.adrenaline);
			
			if (this.combattant.adrenaline < 0) {
				this.combattant.adrenaline = 0;
			}
		}
		
		switch(comp.competence.nom) {
			case "Coup rapide":
				this.coupRapide(comp, messages);
				break;
			case "Coup précis":
				this.coupPrecis(comp, messages);
				break;
			case "Coup puissant":
				this.coupPuissant(comp, messages);
				break;
			case "Encaisser un coup":
				this.encaisserCoup(comp, messages);
				break;
			case "Parer":
				this.parer(comp, messages);
				break;
			case "Esquiver":
				this.esquiver(comp, messages);
				break;
			case "Attaquer à distance":
				this.attaquerADistance(comp, messages);
				break;
			case "Lancer un sort":
				this.lancerUnSort(comp, messages);
				break;
			case "Résister à un sort":
				this.resisterAUnSort(comp, messages);
				break;
			
		}
		
		messages.push("- - - - - - - - - - -");
		this.onMessage.emit(messages);
 	}
		
		
	private attaquerADistance(comp, messages) {
		console.log("attaquer à distance");
		let res = this.deService.lancerDe(20);

		messages.push("jet d'adresse : " + this.combattant.adresse + " + " + res + " = " + (this.combattant.adresse*1 + res));
		
		let a = this.getArme();
		if (a != null) {
			let degats = this.deService.lancerTexteDe(a.profilDistance);
			if (comp.niveau >= 5) {
				let bonus = this.combattant.vigueur/2;
				messages.push(a.nom + " (" + a.profilDistance + ") : " + degats + " + " + bonus + " = " + (degats + bonus));
			}
			else {
				messages.push(a.nom + " (" + a.profilDistance + ") : " + degats);
			}
		}
		
	}

	private lancerUnSort(comp, messages) {
		console.log("lancer un sort");
		let res = this.deService.lancerDe(20);

		if (comp.niveau >= 6) {
			let bonus = (comp.niveau - 5)*2;
			messages.push("jet d'intel. : " + this.combattant.intelligence + " + " + res + " + " + bonus + " = " + (this.combattant.intelligence*1 + res + bonus));
		} else {
			messages.push("jet d'intel. : " + this.combattant.intelligence + " + " + res + " = " + (this.combattant.intelligence*1 + res));
		}	
	}

	private resisterAUnSort(comp, messages) {
		console.log("résister à un sort");
		let res = this.deService.lancerDe(20);

		if (comp.niveau >= 6) {
			let bonus = (comp.niveau - 5)*2;
			messages.push("jet d'intel. : " + this.combattant.intelligence + " + " + res + " + " + bonus + " = " + (this.combattant.intelligence*1 + res + bonus));
		} else {
			messages.push("jet d'intel. : " + this.combattant.intelligence + " + " + res + " = " + (this.combattant.intelligence*1 + res));
		}	
	}
	
	
	private coupRapide(comp, messages) {
		console.log("coup rapide");
		let res = this.deService.lancerDe(20);
		let bonus = null;
		if (comp.niveau == 3)
			bonus = 2;
		if (comp.niveau == 5)
			bonus = 4;
		if (comp.niveau >= 6)
			bonus = 4 + comp.niveau*1 - 5;
		
		let message
		if (bonus == null)
			messages.push("jet d'attaque: " + this.combattant.vivacite + " + " + res + " = " + (this.combattant.vivacite*1 + res));
		else
			messages.push("jet d'attaque: " + this.combattant.vivacite + " + " + res + " + " + bonus + " = " + (this.combattant.vivacite*1 + res + bonus));
		
		messages.push("localisation: " + this.deService.lancerDe(12));
		
		let a = this.getArme();

		if (a != null) {
			let degats = this.deService.lancerTexteDe(a.profilRapide);
			messages.push(a.nom + " (" + a.profilRapide + ") : " + degats);
		}
		
	}
	
	private coupPuissant(comp, messages) {
		console.log("coup puissant");
		let res = this.deService.lancerDe(20);
		let malus = 4;
		let deg = null;
		if (comp.niveau == 2)
			malus = 2;
		if (comp.niveau > 2)
			deg = this.combattant.vigueur/4;
		if (comp.niveau == 5)
			malus = null;
		
		let message
		if (malus == null)
			messages.push("jet d'attaque: " + this.combattant.vigueur + " + " + res + " = " + (this.combattant.vigueur*1 + res));
		else
			messages.push("jet d'attaque: " + this.combattant.vigueur + " + " + res + " - " + malus + " = " + (this.combattant.vigueur*1 + res - malus));
		
		messages.push("localisation: " + this.deService.lancerDe(12));
		
		if (deg != null) {
			messages.push("degats + " + deg);
		}
		
		let a = this.getArme();

		if (a != null) {
			let degats = this.deService.lancerTexteDe(a.profilPuissant);
			messages.push(a.nom + " (" + a.profilPuissant + ") : " + degats);
		}
	}
	
	private coupPrecis(comp, messages) {
		console.log("coup precis");
		let res = this.deService.lancerDe(20);
		
		messages.push("jet d'attaque: " + this.combattant.adresse + " + " + res + " = " + (this.combattant.adresse*1 + res));
				
		let de1 = this.deService.lancerDe(12);
		let de2 = this.deService.lancerDe(12);
		let de3 = this.deService.lancerDe(12);
		let de4 = this.deService.lancerDe(12);
		let armure = "";
		
		if (comp.niveau < 4) {
			if (comp.niveau > 1) {
				if (de1 == de2)
					armure = " (armure ignorée)";
			}
			messages.push("localisation: " + de1 + "/" + de2 + armure);
		}
		
		if (comp.niveau == 4) {
			if (de1 == de2 || de1 == de3 || de2 == de3)
				armure = " (armure ignorée)"			
			messages.push("localisation: " + de1 + "/" + de2 + "/" + de3 + armure);
		}
		
		if (comp.niveau == 5) {
			if (de1 == de2 || de1 == de3 || de1 == de4 || de2 == de3 || de2 == de4 || de3 == de4)
				armure = " (armure ignorée)"
			messages.push("localisation: " + de1 + "/" + de2 + "/" + de3 + "/" + de4 + armure);
		}
		
		let a = this.getArme();

		if (a != null) {
			let degats = this.deService.lancerTexteDe(a.profilPrecis);
			messages.push(a.nom + " (" + a.profilPrecis + ") : " + degats);
		}
	}
	
	private parer(comp, messages) {
		console.log("parer");
		let res = this.deService.lancerDe(20);
		
		let a = this.getArme();
		let bonusArmeTxt = "";
		let bonusArme = 0;
		
		if (a != null) {
			bonusArmeTxt = " + " + a.parade;
			bonusArme = a.parade;
		}
		
		if (comp.niveau > 1) {
			let bonus = 2;
			
			if (comp.niveau >= 4) {
				bonus = 4;
			}
			
			if (comp.niveau >= 6) {
				bonus = comp.niveau-1;
			}
			
			messages.push("jet de parade: " + this.combattant.adresse + " + " + res + " + " + bonus + bonusArmeTxt + " = " + (this.combattant.adresse*1 + res + bonus + bonusArme));
			
		} else {
			messages.push("jet de parade: " + this.combattant.adresse + " + " + res + bonusArmeTxt + " = " + (this.combattant.adresse*1 + res + bonusArme));
		}
			
	}
	
	private esquiver(comp, messages) {
		console.log("esquiver");
		let res = this.deService.lancerDe(20);
		
		if (comp.niveau >= 5) {
			let bonus = 2;
			
			if (comp.niveau >= 6) {
				bonus = (comp.niveau-5)*2 +2;
			}
			
			messages.push("jet d'esquive: " + this.combattant.vivacite + " + " + res + " + " + bonus + " = " + (this.combattant.vivacite*1 + res + bonus));
			
		} else {
			messages.push("jet d'esquive: " + this.combattant.vivacite + " + " + res + " = " + (this.combattant.vivacite*1 + res));
		}
			
	}
	
	private encaisserCoup(comp, messages) {
		console.log("encaisser un coup");
		let res = this.deService.lancerDe(20);
		
		let testBravoure = res + this.combattant.bravoure >= 20;
		let txt = null;
		if (testBravoure) {
			txt = "test réussi";
		} else {
			txt = "test échoué";
			this.combattant.peur ++;
		}
		messages.push("jet de bravoure : " + this.combattant.bravoure + " + " + res + " = " + (res + this.combattant.bravoure*1));

		messages.push(txt);
		
	}
	
	/**
	 * Récupère la 1ere arme du personnage
	 */
	private getArme() {
		if (this.combattant.armes != null) {
			for (var a in this.combattant.armes) {
				if (this.combattant.armes[a].selected) {
					return this.combattant.armes[a];
				}
			}
		}
		
		return null;
	}
	
	/**
	 * Récupère les infos du niveau de la compétence
	 * @param comp 
	 */
	private getNiveauCompetence(comp) {
		if (comp.niveau == 1) {
			return comp.competence.niv1;
		}
		if (comp.niveau == 2) {
			return comp.competence.niv2;
		}
		if (comp.niveau == 3) {
			return comp.competence.niv3;
		}
		if (comp.niveau == 4) {
			return comp.competence.niv4;
		}
		if (comp.niveau == 5) {
			return comp.competence.niv5;
		}
		return comp.competence.niv6;
	}
	
	/**
	 * Récupère les infos du niveau du sort
	 * @param sort 
	 */
	private getNiveauSort(sort) {
		if (sort.niveau == 1) {
			return sort.sort.niv1;
		}
		if (sort.niveau == 2) {
			return sort.sort.niv2;
		}
		if (sort.niveau == 3) {
			return sort.sort.niv3;
		}
		if (sort.niveau == 4) {
			return sort.sort.niv4;
		}
		if (sort.niveau == 5) {
			return sort.sort.niv5;
		}
		return sort.sort.niv6;
	}
}


