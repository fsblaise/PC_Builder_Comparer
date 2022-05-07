import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparatorRoutingModule } from './comparator-routing.module';
import { ComparatorComponent } from './comparator.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AppModule} from "../../app.module";
import {BuilderComponent} from "../builder/builder.component";
import {MatRippleModule} from "@angular/material/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    ComparatorComponent
  ],
  exports: [
    ComparatorComponent
  ],
    imports: [
        CommonModule,
        ComparatorRoutingModule,
        MatTabsModule,
        MatTableModule,
        MatGridListModule,
        MatCardModule,
        FlexLayoutModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        MatListModule,
        MatSnackBarModule,
        MatRippleModule,
        MatProgressSpinnerModule
    ]
})
export class ComparatorModule { }
