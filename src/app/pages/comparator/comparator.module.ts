import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparatorRoutingModule } from './comparator-routing.module';
import { ComparatorComponent } from './comparator.component';


@NgModule({
  declarations: [
    ComparatorComponent
  ],
  imports: [
    CommonModule,
    ComparatorRoutingModule
  ]
})
export class ComparatorModule { }
