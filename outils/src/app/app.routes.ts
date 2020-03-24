import {Routes} 				from '@angular/router';
import {HistoireComponent} 		from './histoire/histoire.component';
import {ButinComponent} 		from './butin/butin.component';
import {CombatComponent} 		from './combat/combat.component';
import {SaveCombatComponent} 	from './combat/save_combat.component';
import {ArtefactComponent} 		from './enigme/artefact.component';
import {CarteComponent} 		from './carte/carte.component';

export const rootRouterConfig: Routes = [
	{path: '', redirectTo: 'histoire', pathMatch: 'full'},
	{path: 'histoire', component: HistoireComponent},
	{path: 'butin', component: ButinComponent},
	{path: 'combat', component: CombatComponent, canDeactivate: [SaveCombatComponent]},
	{path: 'artefact', component: ArtefactComponent},
	{path: 'carte', component: CarteComponent}
];

