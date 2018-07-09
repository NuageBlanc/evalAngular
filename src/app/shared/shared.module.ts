import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class SharedModule { }
