import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {HistoireComponent} from './histoire/histoire.component';
import {DesComponent} from './des/des.component';
import {ButinComponent} from './butin/butin.component';
import {CombatComponent} from './combat/combat.component';
import {SaveCombatComponent} 	from './combat/save_combat.component';
import {CarteComponent} from './carte/carte.component';
import {ArtefactComponent} from './enigme/artefact.component';
import {CompteurComponent} from './enigme/compteur/compteur.component';
import {CombattantComponent} from './combattant/combattant.component';
import {JaugeComponent} from './combattant/jauge/jauge.component';
import {ReactivitePipe} from './combattant/reactivite.pipe';
import {OrderByPipe} from './commun/orderBy.pipe';
import {FilterPipe} from './butin/filter.pipe';


import {DataService} from './data/data.service';
import {TestCaracService} from './des/test_carac.service';
import {DeService} from './des/de.service';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, HistoireComponent, DesComponent, ButinComponent, CombatComponent, CombattantComponent, JaugeComponent, ReactivitePipe, OrderByPipe, FilterPipe, ArtefactComponent, CompteurComponent, CarteComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [DataService, TestCaracService, DeService, SaveCombatComponent],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
