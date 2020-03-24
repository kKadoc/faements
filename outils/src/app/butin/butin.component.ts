import {Component, OnInit} from '@angular/core';
import {DataService} from '../data/data.service';
import {Tresor} from './../data/tresor';
import {FilterPipe} from './filter.pipe';

@Component({
  selector: 'butin',
  styleUrls: ['./butin.component.css'],
  templateUrl: './butin.component.html'
})
export class ButinComponent implements OnInit {
	
	tresors: Tresor[];
	filterText: string;
	
	constructor (private dataService: DataService) {}
	
	ngOnInit() { 
		this.dataService.tresors.subscribe((tresors) => {this.tresors = tresors;});
	}
	
	onFilter() {
		
	}
}
