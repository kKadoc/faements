import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'jauge',
  styleUrls: ['./jauge.component.css'],
  templateUrl: './jauge.component.html'
})
export class JaugeComponent {
	
	@Input()
	nom: string;
	
	@Input()
	type: string;
	
	@Input()
	valeur: number;
	
	@Output()
	jaugeChange = new EventEmitter();

	up() {
		var res = this.valeur + 1;
		
		this.jaugeChange.emit({
			valeur: res
		})
	}
	
	down() {
		var res = this.valeur - 1;
	
		this.jaugeChange.emit({
			valeur: res
		})
	}
}


