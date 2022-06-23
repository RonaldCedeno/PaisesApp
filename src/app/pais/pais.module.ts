import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorRegionComponent } from './por-region/por-region.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorRegionComponent,
    PorPaisComponent,
    PorCapitalComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PorRegionComponent,
    PorPaisComponent,
    PorCapitalComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
