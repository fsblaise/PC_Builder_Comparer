import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComparatorComponent} from "./comparator.component";

const routes: Routes = [{ path: '', component: ComparatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComparatorRoutingModule { }
