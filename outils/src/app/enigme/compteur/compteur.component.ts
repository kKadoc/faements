import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'compteur',
  styleUrls: ['./compteur.component.css'],
  templateUrl: './compteur.component.html'
})
export class CompteurComponent implements OnInit {
	
	//valeur courante du compteur
	//initialisé au temps de jeu
	//en ms
	@Input()
	valeur;
	
	//nombre de crans du compteur
	@Input()
	max;
	
	rotate;
	
	//interval de temps entre chaque incrément de valeur
	//en ms
	@Input()
	interval;
	
	ngOnInit() { 
		if (this.valeur == null) {
			this.valeur = 0;
		} else {
			//passage en millisecondes 
			//this.valeur = this.valeur * 60000;
			
			//le ratio de vitesse (la référence est la seconde);
			this.valeur = this.valeur / this.interval;
			
			//le modulo
			this.valeur = this.valeur % this.max;
		}
		
		this.rotate = this.valeur / this.max * 360;
		
		IntervalObservable.create(this.interval).subscribe(n => this.up());
	}
	
	up = function() {

		this.valeur++; 
		if (this.valeur >= this.max) { 
			this.valeur = 0;
		}
		
		this.rotate = this.valeur / this.max * 360;
	}
}


