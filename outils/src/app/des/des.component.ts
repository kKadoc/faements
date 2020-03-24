import {Component, OnInit} from '@angular/core';
import {DeService} from './de.service';

@Component({
  selector: 'des',
  styleUrls: ['./des.component.css'],
  templateUrl: './des.component.html'
})
export class DesComponent implements OnInit{
	des = [3,4,6,8,10,12,20,100];
	resultat = 0;
		
	constructor (private deService: DeService) {}
	
	ngOnInit() {}
	
	lancerDe(de) {
		this.resultat = null;	
		setTimeout(() => this.resultat = this.deService.lancerDe(de) , 200);
	}
}
