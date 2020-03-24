import { Injectable }     	from '@angular/core';
import {DeService} from './de.service';


@Injectable()
export class TestCaracService {

	ref = [20,19,19,18,18,16,16,14,14,12,12,10,10,9,9,8,8,7,7,6,6,5,5,5,5,4,4,4,4,3,3,3,3,2,2,2,2];
	
	constructor (private deService: DeService) {}
	
	ngOnInit() {}
	

	getListRes() {
		return this.ref;
	}
	
	test(index, speak) {
		if (index < 0)
			index = 0;
		if (index > 36)
			index = 36
		
		let res = this.deService.lancerDe(20);
		let success = res >= this.ref[index];
		
		let message = "Test de caractéristique ("+index+") : ";
		if (success) {
			message+= "Succès avec "+res+" > "+this.ref[index];
		} else {
			message+= "Echec avec "+res+" < "+this.ref[index];
		}
		if (speak) {
			alert(message);
		} 
		console.log(message)
		
		return success;
	}
	
}
