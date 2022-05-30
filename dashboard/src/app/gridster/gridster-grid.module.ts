import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GridsterModule } from 'angular-gridster2';
import { ChartsModule } from '../shared/charts/charts.module';
import { MaterialModule } from '../shared/material/material.module';
import { TextEditorModule } from '../shared/text-editor/text-editor.module';
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { CardTypeSelectionComponent } from './components/card-type-selection/card-type-selection.component';
import { EditCellOverlayComponent } from './components/edit-cell-overlay/edit-cell-overlay.component';
import { GridActionBarComponent } from './components/grid-action-bar/grid-action-bar.component';
import { GridsterOptionsDirective } from './components/gridster-options/gridster-options.directive';
import { GridsterGridComponent } from './components/gridster.component';

@NgModule({
  declarations: [
    GridsterGridComponent,
    GridsterOptionsDirective,
    GridActionBarComponent,
    CardTemplateComponent,
    EditCellOverlayComponent,
    CardTypeSelectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TextEditorModule,
    ChartsModule,
    GridsterModule,
  ],
  exports: [GridsterGridComponent],
})
export class GridsterGridModule {}
