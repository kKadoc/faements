import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CombatComponent } from './combat.component';

@Injectable()
export class SaveCombatComponent implements CanDeactivate<CombatComponent> {

  canDeactivate(component: CombatComponent) {
    component.save();
    return true;
  }

}