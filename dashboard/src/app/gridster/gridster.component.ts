import { Component, Input, OnInit } from '@angular/core';
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';

@Component({
  selector: 'app-gridster',
  templateUrl: 'gridster.component.html',
  styleUrls: ['gridster.component.scss'],
})
export class GridsterGridComponent implements OnInit {
  @Input() options: GridsterConfig;
  @Input() dashboard: Array<GridsterItem> | null;

  static itemChange(item: GridsterItem, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2 },
    ];
  }

  changedOptions() {
    if (this.options?.api?.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem(item: GridsterItem) {
    if (this.dashboard) {
      this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }
  }

  addItem() {
    if (this.dashboard) {
      this.dashboard.push({ x: 2, y: 2, cols: 3, rows: 3 });
    }
  }
}
