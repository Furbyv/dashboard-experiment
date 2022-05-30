import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {
  GridsterItem,
  GridsterItemComponentInterface,
} from 'angular-gridster2';
import { take } from 'rxjs';
import { appear } from '../shared/animations/appear.animation';
import { CardTypeSelectionComponent } from './card-type-selection/card-type-selection.component';
import { CardTemplate, DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-gridster',
  templateUrl: 'gridster.component.html',
  styleUrls: ['gridster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: appear,
})
export class GridsterGridComponent implements AfterViewInit {
  editable: boolean = false;
  dashboard$ = this.dashboardService.dashboard$;
  isModified$ = this.dashboardService.modified$;

  constructor(
    private dashboardService: DashboardService,
    private _bottomSheet: MatBottomSheet
  ) {}

  private resizeEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  ngAfterViewInit(): void {
    this.resizeEvent();
  }

  itemChange(
    item: GridsterItem,
    _: GridsterItemComponentInterface,
    dashboard: CardTemplate[]
  ) {
    const db = [...dashboard];
    const card = db.find((a) => a.position['id'] === item['id']);
    if (card) {
      card.position = item;
      this.dashboardService.setDashboard(db);
    }
    this.resizeEvent();
  }

  itemInit() {
    this.resizeEvent();
  }

  toggleEditMode(value: boolean) {
    this.editable = value;
  }

  onSave() {
    this.dashboardService.saveDashboard();
  }

  onDiscard() {
    this.dashboardService.discardChanges();
  }

  removeItem(item: CardTemplate, dashboard: CardTemplate[]): void {
    const db = [...dashboard];
    db.splice(db.indexOf(item), 1);
    this.dashboardService.setDashboard(db);
    this.resizeEvent();
  }

  addItem(dashboard: CardTemplate[]): void {
    const maxId = Math.max(...dashboard.map((d) => d.id)) ?? 1;
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
