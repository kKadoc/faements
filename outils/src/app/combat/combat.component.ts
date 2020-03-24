import {Component, OnInit} from '@angular/core';
import {DataService} from '../data/data.service';
import {Creature} from '../data/creature';
import {OrderByPipe} from '../commun/orderBy.pipe';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'combat',
  styleUrls: ['./combat.component.css'],
  templateUrl: './combat.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CombatComponent implements OnInit {
	
	creatures: Creature[];
	ennemis: Creature[];
	combattants=[];
	messages=[];
	
	selectedCreature: Creature;
	selectedEnnemi: Creature;
	
	comp_help = null;
		
	constructor (private dataService: DataService) {}


	ngOnInit() { 
		this.dataService.creatures.subscribe((creatures) => {this.creatures = creatures; this.selectedCreature=this.creatures[0];});
		this.dataService.ennemis.subscribe((ennemis) => {this.ennemis = ennemis; this.selectedEnnemi=this.ennemis[0];});
		
		let combattantsSave = JSON.parse(localStorage.getItem('combattants'));
		
		if(combattantsSave){
			console.log("chargement de ...");
			console.log(combattantsSave);
			this.combattants = combattantsSave;
		}

	}
	
	save() {
		console.log("sauvegarde de ...");
		console.log(this.combattants);
		localStorage.setItem("combattants", JSON.stringify(this.combattants));
	}
	
	selectCreature(selectedCreature) {
		this.selectedCreature = selectedCreature;
		console.log(this.selectedCreature);
	}
	
	selectEnnemi(selectedEnnemi) {
		this.selectedEnnemi = selectedEnnemi;
		console.log(this.selectedEnnemi);
	}
	
	addCombattant(creature) {
		console.log("Ajout de " + creature.nom);
		let combattant = Object.assign({}, creature);

		this.combattants.push(combattant);
	}

	addMessage(message: string[]) {
		this.messages.unshift(message);	
	}
	
	deleteCombattant(combattant: Creature) {
		console.log("Suppression de " + combattant.nom);
		
		this.combattants.splice(this.combattants.indexOf(combattant),1);
	}
}


