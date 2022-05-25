import { Component, OnInit } from '@angular/core';
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
  options: GridsterConfig = {};
  dashboard: Array<GridsterItem> | undefined;

  static itemChange(item: GridsterItem, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.OnDragAndResize,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        dropOverItems: false,
      },
      resizable: {
        enabled: true,
      },
    };

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
