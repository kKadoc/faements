/*
 * Example use
 *		Basic Array of single type: *ngFor="#todo of todoService.todos | orderBy : '-'"
 *		Multidimensional Array Sort on single column: *ngFor="#todo of todoService.todos | orderBy : ['-status']"
 *		Multidimensional Array Sort on multiple columns: *ngFor="#todo of todoService.todos | orderBy : ['status', '-title']"
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy', pure: false})
export class OrderByPipe implements PipeTransform {

    transform(array: Array<string>, args: string): Array<string> {
		
		if (array == null) {
			return null;
		}
		array.sort((a: any, b: any) => {
			if (a[args] < b[args]) {
				return -1;
			} else if (a[args] > b[args]) {
				return 1;
			} else {
				return 0;
			}
		});
		return array;
	}
}