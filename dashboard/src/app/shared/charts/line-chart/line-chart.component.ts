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
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent implements OnInit {
  highcharts = Highcharts;
  chart: Chart;

  initChart() {
    this.chart = new Chart({
      chart: {
        type: 'line',
        reflow: true,
      },
      title: {
        text: 'Linechart',
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'line',
          name: 'Line 1',
          data: [1, 2, 3],
        },
      ],
    });
  }

  ngOnInit(): void {
    this.initChart();
  }

  constructor() {}
}
