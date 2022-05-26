import { Directive, Input, OnInit } from '@angular/core';
import { DisplayGrid, GridType } from 'angular-gridster2';
import { GridsterGridComponent } from '../gridster.component';

@Directive({
  selector: 'app-gridster[default-options]',
})
export class GridsterOptionsDirective {
  @Input() set editable(value: boolean | null) {
    this.setGridsterOptions(value ?? false);
  }

  constructor(private gridsterGridComponent: GridsterGridComponent) {}

  setGridsterOptions(editable: boolean) {
    this.gridsterGridComponent.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.OnDragAndResize,
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
