import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
  ],
})
export class MaterialModule {}
