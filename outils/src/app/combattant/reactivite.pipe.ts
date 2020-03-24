import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'reactivitePipe'})
export class ReactivitePipe implements PipeTransform {
	transform(vivacite: number): number {
		if (vivacite <= 10) {
			return 5;
		}
		
		if (vivacite <= 20) {
			return 4;
		}
		
		if (vivacite <= 30) {
			return 3;
		}
		
		return 2;
	}
}