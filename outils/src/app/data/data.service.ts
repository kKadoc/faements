import { Injectable }     	from '@angular/core';
import { Http, Response } 	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';

@Injectable()
export class DataService {
	private histoireUrl = 'app/data/scenar.txt';  
	private tresorsUrl = 'app/data/tresors.json'; 
	private creaturesUrl = 'app/data/creatures.json';
	private ennemisUrl = 'app/data/ennemis.json';
	private competencesUrl = 'app/data/skills.json';
	private sortsUrl = 'app/data/spells.json';
	private armesUrl = 'app/data/armes.json';

	tresors;
	histoire;
	creatures;
	ennemis;
	competences;
	sorts;
	armes;
	
	constructor (private http: Http) {
		this.tresors = this.http.get(this.tresorsUrl).map(this.extractJsonData).catch(this.handleError);
		this.histoire = this.http.get(this.histoireUrl).map(this.extractTextData).catch(this.handleError);
		this.creatures = this.http.get(this.creaturesUrl).map(this.extractJsonData).catch(this.handleError);
		this.ennemis = this.http.get(this.ennemisUrl).map(this.extractJsonData).catch(this.handleError);
		this.competences = this.http.get(this.competencesUrl).map(this.extractJsonData).catch(this.handleError);
		this.sorts = this.http.get(this.sortsUrl).map(this.extractJsonData).catch(this.handleError);
		this.armes = this.http.get(this.armesUrl).map(this.extractJsonData).catch(this.handleError);
	}
		
	private extractJsonData(res: Response) {
		let body = res.json(); 
		return body || { };
	}
	
	private extractTextData(res: Response) {
		return res.text();
	}
	
	private handleError (error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const err = error.text() || '';
			errMsg = `${error.status} - ${error.statusText || ''}\r\n ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
