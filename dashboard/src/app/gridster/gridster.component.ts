import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-gridster',
  templateUrl: 'gridster.component.html',
  styleUrls: ['gridster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridsterGridComponent {
  editable: boolean = false;
  dashboard$ = this.dashboardService.dashboard$;

  trackBy(_: number, item: GridsterItem): number {
    return item['id'];
  }

  constructor(private dashboardService: DashboardService) {}

  toggleEditMode(value: boolean) {
    this.editable = value;
  }

  removeItem(item: GridsterItem, dashboard: GridsterItem[]): void {
    const db = [...dashboard];
    db.splice(db.indexOf(item), 1);
    this.dashboardService.setDashboard(db);
  }

  addItem(dashboard: GridsterItem[]): void {
    const db = [...dashboard, { x: 0, y: 0, cols: 1, rows: 1 }];
    this.dashboardService.setDashboard(db);
  }
}
