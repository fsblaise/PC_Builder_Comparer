import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder.component';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [
    BuilderComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule
  ]
})
export class BuilderModule { }
