import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { ReplaySubject, Subject } from 'rxjs';

export interface Dimensions {
  width: number;
  height: number;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrls: ['../base-chart/base-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements OnInit {
  highcharts = Highcharts;
  chart: Chart;

  initChart() {
    this.chart = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Bar chart',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high',
        },
        labels: {
          overflow: 'justify',
        },
      },
      tooltip: {
        valueSuffix: ' millions',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        shadow: true,
      },
      series: [
        {
          type: 'bar',
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2],
        },
        {
          type: 'bar',
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6],
        },
        {
          type: 'bar',
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31],
        },
        {
          type: 'bar',
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40],
        },
      ],
    });
  }

  ngOnInit(): void {
    this.initChart();
  }

  constructor() {}
}
