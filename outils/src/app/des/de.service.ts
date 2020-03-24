import { Injectable }     	from '@angular/core';


@Injectable()
export class DeService {


	lancerDe(de) {

		var min = 1;
		if (de == 100) {
			min = 0;
		}
		
		let res = Math.floor(Math.random() * (de - min + 1)) + min;
		console.log("jet de dé "+de+" : " + res);
		
		return res;	
	}
	
	lancerTexteDe(txt) {

		let nb = 0;
		let value = 0;
		let bonus = 0;
		
		txt = txt.trim();
		let s = txt.split("+");
		
		if (s.length > 1) {
			bonus = s[1];
			txt = s[0];
		}
		
		s = txt.split("D");
		nb = s[0];
		value = s[1];
		
		
		
		let res = 0;
		
		for (var _i = 0; _i < nb; _i++) {
			res += this.lancerDe(value);
		}
		
		res += bonus*1;
		
		console.log(nb + " dé(s) " + value + " + " + bonus + " = " + res);
		return res;

	}
}
