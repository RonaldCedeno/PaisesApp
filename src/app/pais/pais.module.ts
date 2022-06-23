import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorRegionComponent } from './por-region/por-region.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorRegionComponent,
    PorPaisComponent,
    PorCapitalComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PorRegionComponent,
    PorPaisComponent,
    PorCapitalComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
