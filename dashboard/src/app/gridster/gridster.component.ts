import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  GridsterItem,
  GridsterItemComponent,
  GridsterItemComponentInterface,
} from 'angular-gridster2';
import {
  CardTemplate,
  CardType,
  DashboardService,
} from './services/dashboard.service';

@Component({
  selector: 'app-gridster',
  templateUrl: 'gridster.component.html',
  styleUrls: ['gridster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridsterGridComponent implements AfterViewInit {
  editable: boolean = false;
  dashboard$ = this.dashboardService.dashboard$;

  trackBy(_: number, item: CardTemplate): number {
    return item['id'];
  }

  constructor(private dashboardService: DashboardService) {}

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }

  itemChange(item: GridsterItem, component: GridsterItemComponentInterface) {
    window.dispatchEvent(new Event('resize'));
  }

  itemInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

  toggleEditMode(value: boolean) {
    this.editable = value;
  }

  removeItem(item: CardTemplate, dashboard: CardTemplate[]): void {
    const db = [...dashboard];
    db.splice(db.indexOf(item), 1);
    this.dashboardService.setDashboard(db);
  }

  addItem(dashboard: CardTemplate[]): void {
    const maxId = Math.max(...dashboard.map((d) => d.id));
    const db = [
      ...dashboard,
      {
        id: maxId + 1,
        type: CardType.PieChart,
        position: { id: maxId + 1, x: 0, y: 0, cols: 1, rows: 1 },
      },
    ];
    this.dashboardService.setDashboard(db);
  }
}
