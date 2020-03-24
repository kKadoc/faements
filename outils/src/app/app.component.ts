import {Component, OnInit} from '@angular/core';
import {TestCaracService} from './des/test_carac.service';
// Add the RxJS Observable operators.
import './rxjs-operators';


@Component({
  selector   : 'app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
	
	resCaracs = [];
	
	constructor (private testCaracService: TestCaracService) {}
	
	ngOnInit() { 
		this.resCaracs = this.testCaracService.getListRes();
	}
	
	testCarac(i) {
		let res = this.testCaracService.test(i, true);
	}
}
