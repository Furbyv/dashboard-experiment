import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
} from 'angular-gridster2';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-gridster',
  templateUrl: 'gridster.component.html',
  styleUrls: ['gridster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridsterGridComponent implements OnInit {
  editable: boolean = false;
  @Input() dashboard: Array<GridsterItem> | null;

  trackBy(_: number, item: GridsterItem): number {
    return item['id'];
  }

  ngOnInit() {
    this.dashboard = [
      { id: 1, cols: 2, rows: 1, y: 0, x: 0 },
      { id: 2, cols: 2, rows: 2, y: 0, x: 2 },
    ];
  }

  toggleEditMode() {
    this.editable = !this.editable;
  }

  removeItem(item: GridsterItem) {
    if (this.dashboard) {
      this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }
  }

  addItem(): void {
    if (this.dashboard) {
      this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
    }
  }
}
