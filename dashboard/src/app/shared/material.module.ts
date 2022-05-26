import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  exports: [MatCardModule, MatButtonModule, MatSlideToggleModule],
})
export class MaterialModule {}
