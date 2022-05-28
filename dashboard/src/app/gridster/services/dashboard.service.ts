import { Injectable } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

export enum CardType {
  Narrative = 'Narrative',
  PieChart = 'PieChart',
  LineChart = 'LineChart',
  BarChart = 'BarChart',
  AreaChart = 'AreaChart',
}

export interface CardTemplate {
  id: number;
  type: CardType;
  position: GridsterItem;
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private dashboard$$: Subject<CardTemplate[]> = new BehaviorSubject<
    CardTemplate[]
  >([
    {
      id: 1,
      type: CardType.LineChart,
      position: { id: 1, cols: 2, rows: 1, y: 0, x: 0 },
    },
    {
      id: 2,
      type: CardType.Narrative,
      position: { id: 2, cols: 2, rows: 2, y: 0, x: 2 },
    },
  ]);
  dashboard$ = this.dashboard$$.asObservable();

  constructor() {}

  setDashboard(dashboard: CardTemplate[]): void {
    this.dashboard$$.next(dashboard);
  }
}
