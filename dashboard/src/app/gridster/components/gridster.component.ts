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
import { appear } from 'src/app/shared/animations/appear.animation';
import { DashboardService, CardTemplate } from '../services/dashboard.service';
import { CardTypeSelectionComponent } from './card-type-selection/card-type-selection.component';

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

  onTemplateChange(template: CardTemplate, dashboard: CardTemplate[]) {
    const cardIndex = dashboard.findIndex((c) => c.id === template.id);
    if (cardIndex) {
      dashboard[cardIndex] = template;
      this.dashboardService.setDashboard(dashboard);
      this.dashboardService.saveDashboard();
    }
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
    let maxId = dashboard.length ? Math.max(...dashboard.map((d) => d.id)) : 0;
    console.log(maxId);
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
