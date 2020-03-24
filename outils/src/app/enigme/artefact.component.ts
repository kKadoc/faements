import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'artefact',
  styleUrls: ['./artefact.component.css'],
  templateUrl: './artefact.component.html'
})
export class ArtefactComponent{
	//t0 = j - 19 à 8h
  //tf = j + 25 à 23h
  joursAventure = 1;
  heuresAventure = 13;

  jours = 19 + this.joursAventure;
  //temps depuis le début de la malédiction en ms
	time = ((this.jours * 24) + this.heuresAventure - 8) * 3600 * 60 * 1000;
}


