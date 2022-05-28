import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { averages, ranges } from './area-chart.data';

@Component({
  selector: 'app-area-chart',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrls: ['../base-chart/base-chart.component.scss'],
})
export class AreaChartComponent implements OnInit {
  chart: Chart;

  initChart() {
    this.chart = new Chart({
      title: {
        text: 'Area chart',
      },
      credits: {
        enabled: false,
      },
      chart: {
        type: 'arearange',
        reflow: true,
      },
      xAxis: {
        type: 'datetime',
        accessibility: {
          rangeDescription: 'Range: Jul 1st 2009 to Jul 31st 2009.',
        },
      },

      yAxis: {
        title: {
          text: null,
        },
      },

      tooltip: {
        shared: true,
        valueSuffix: '°C',
      },

      series: [
        {
          name: 'Temperature',
          type: 'line',
          data: averages,
          zIndex: 1,
        },
        {
          name: 'Range',
          data: ranges,
          type: 'arearange',
          lineWidth: 0,
          linkedTo: ':previous',
          fillOpacity: 0.3,
          zIndex: 0,
          marker: {
            enabled: false,
          },
        },
      ],
    });
  }

  ngOnInit(): void {
    this.initChart();
  }

  constructor() {}
}
