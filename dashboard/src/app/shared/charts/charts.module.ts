import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [LineChartComponent],
  imports: [CommonModule, ChartModule, FormsModule],
  exports: [LineChartComponent],
})
export class ChartsModule {}
