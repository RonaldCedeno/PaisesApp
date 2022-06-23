import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorRegionComponent } from './por-region/por-region.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorRegionComponent,
    PorPaisComponent,
    PorCapitalComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
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
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ]
})
export class PaisModule { }
