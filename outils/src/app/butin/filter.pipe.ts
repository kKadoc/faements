/*
 * Example use
 *		Basic Array of single type: *ngFor="#todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="#todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="#todo of todoService.todos | orderBy : ['status', '-title']"
 */

import {Pipe, PipeTransform} from '@angular/core';
import {Tresor} from '../data/tresor';

@Pipe({name: 'filter', pure: false})
export class FilterPipe implements PipeTransform {

    transform(array: Array<Tresor>, args: string): Array<Tresor> {
	
		if (array == null || args == null || args == "") {
			return array;
		}
		
		let search = args.split(" ");
		
		return array.filter(item => search.indexOf(String(item.num)) !== -1);
	}
}