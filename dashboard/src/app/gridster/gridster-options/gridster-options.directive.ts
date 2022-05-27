import { Directive, Input } from '@angular/core';
import {
  DisplayGrid,
  GridsterComponent,
  GridsterConfig,
  GridType,
} from 'angular-gridster2';

@Directive({
  selector: 'gridster[default-options]',
})
export class GridsterOptionsDirective {
  @Input() set editable(value: boolean | null) {
    this.gridsterComponent.options = this.getGridsterOptions(value ?? false);
    this.gridsterComponent.optionsChanged();
  }

  constructor(private gridsterComponent: GridsterComponent) {}

  getGridsterOptions(editable: boolean): GridsterConfig {
    return {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.OnDragAndResize,
      margin: 16,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: editable,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        dropOverItems: false,
      },
      resizable: {
        enabled: editable,
      },
    };
  }
}
