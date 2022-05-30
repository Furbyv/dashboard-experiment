import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { GridsterGridComponent } from './gridster/gridster.component';
import { GridsterModule } from 'angular-gridster2';
import { GridsterOptionsDirective } from './gridster/gridster-options/gridster-options.directive';
import { GridActionBarComponent } from './gridster/grid-action-bar/grid-action-bar.component';
import { CardTemplateComponent } from './gridster/card-template/card-template.component';
import { ChartsModule } from './shared/charts/charts.module';
import { CardTypeSelectionComponent } from './gridster/card-type-selection/card-type-selection.component';
import { EditCellOverlayComponent } from './gridster/edit-cell-overlay/edit-cell-overlay.component';
import { QuillModule } from 'ngx-quill';
import { TextEditorModule } from './shared/text-editor/text.-editor.module';

@NgModule({
  declarations: [
    AppComponent,
    GridsterGridComponent,
    GridsterOptionsDirective,
    GridActionBarComponent,
    CardTemplateComponent,
    EditCellOverlayComponent,
    CardTypeSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GridsterModule,
    ChartsModule,
    TextEditorModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
