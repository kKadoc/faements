import {Component, OnInit} from '@angular/core';
import {DataService} from '../data/data.service';

@Component({
  selector: 'histoire',
  styleUrls: ['./histoire.component.css'],
  templateUrl: './histoire.component.html'
})
export class HistoireComponent implements OnInit {
	
	histoire: String;
	
	constructor (private dataService: DataService) {}
	
	ngOnInit() { 
		this.dataService.histoire.subscribe((histoire) => {this.histoire = histoire;});
	}
}
