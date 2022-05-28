import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {
  GridsterItem,
  GridsterItemComponent,
  GridsterItemComponentInterface,
} from 'angular-gridster2';
import { take } from 'rxjs';
import { CardTypeSelectionComponent } from './card-type-selection/card-type-selection.component';
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

  constructor(
    private dashboardService: DashboardService,
    private _bottomSheet: MatBottomSheet
  ) {}

  private resizeEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

  ngAfterViewInit(): void {
    this.resizeEvent();
  }

  itemChange(item: GridsterItem, component: GridsterItemComponentInterface) {
    this.resizeEvent();
  }

  itemInit() {
    this.resizeEvent();
  }

  toggleEditMode(value: boolean) {
    this.editable = value;
  }

  removeItem(item: CardTemplate, dashboard: CardTemplate[]): void {
    const db = [...dashboard];
    db.splice(db.indexOf(item), 1);
    this.dashboardService.setDashboard(db);
    this.resizeEvent();
  }

  addItem(dashboard: CardTemplate[]): void {
    const maxId = Math.max(...dashboard.map((d) => d.id));
    this._bottomSheet
      .open(CardTypeSelectionComponent)
      .afterDismissed()
      .pipe(take(1))
      .subscribe((val) => {
        if (val) {
          const type = val;
          const db = [
            ...dashboard,
            {
              id: maxId + 1,
              type,
              position: { id: maxId + 1, x: 0, y: 0, cols: 1, rows: 1 },
            },
          ];
          this.dashboardService.setDashboard(db);
        }
      });
  }
}
