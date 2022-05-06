import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder.component';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import { ListComponent } from './list/list.component';
import { ViewerComponent } from './viewer/viewer.component';
import {MatCardModule} from "@angular/material/card";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove/remove.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    BuilderComponent,
    ListComponent,
    ViewerComponent,
    EditComponent,
    RemoveComponent
  ],
  exports: [
    BuilderComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    FlexModule,
    FormsModule,
    MatButtonModule,
    ExtendedModule,
    MatSnackBarModule,
    MatInputModule,
    MatTabsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class BuilderModule { }
