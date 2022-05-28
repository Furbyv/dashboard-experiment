import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import highchartsMore from 'highcharts/highcharts-more';
import * as Highcharts from 'highcharts';
highchartsMore(Highcharts);

@NgModule({
  declarations: [LineChartComponent, AreaChartComponent],
  imports: [CommonModule, ChartModule, FormsModule],
  exports: [LineChartComponent, AreaChartComponent],
})
export class ChartsModule {}
