import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { GridsterGridComponent } from './gridster/gridster.component';
import { GridsterModule } from 'angular-gridster2';
import { KtdComponent } from './ktd-grid/ktd-grid.component';
import { GridsterOptionsDirective } from './gridster/gridster-options/gridster-options.directive';
import { GridActionBarComponent } from './gridster/grid-action-bar/grid-action-bar.component';
import { CardTemplateComponent } from './gridster/card-template/card-template.component';

@NgModule({
  declarations: [
    AppComponent,
    GridsterGridComponent,
    KtdComponent,
    GridsterOptionsDirective,
    GridActionBarComponent,
    CardTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KtdGridModule,
    BrowserAnimationsModule,
    MaterialModule,
    GridsterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
