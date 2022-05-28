import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import highchartsMore from 'highcharts/highcharts-more';
import variablePie from 'highcharts/modules/variable-pie';
import * as Highcharts from 'highcharts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
highchartsMore(Highcharts);
variablePie(Highcharts);

@NgModule({
  declarations: [LineChartComponent, AreaChartComponent, PieChartComponent],
  imports: [CommonModule, ChartModule, FormsModule],
  exports: [LineChartComponent, AreaChartComponent, PieChartComponent],
})
export class ChartsModule {}
