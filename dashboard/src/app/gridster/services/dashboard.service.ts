import { Injectable } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private dashboard$$: Subject<GridsterItem[]> = new BehaviorSubject<
    GridsterItem[]
  >([
    { id: 1, cols: 2, rows: 1, y: 0, x: 0 },
    { id: 2, cols: 2, rows: 2, y: 0, x: 2 },
  ]);
  dashboard$ = this.dashboard$$.asObservable();

  constructor() {}

  setDashboard(dashboard: GridsterItem[]): void {
    this.dashboard$$.next(dashboard);
  }
}
