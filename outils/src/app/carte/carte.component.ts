import {Component} from '@angular/core';

@Component({
  selector: 'carte',
  styleUrls: ['./carte.component.css'],
  templateUrl: './carte.component.html'
})
export class CarteComponent {
	fond = true;
	zones = true;
	cercles = false;
	anneaux = false;
}
