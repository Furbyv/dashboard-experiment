import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-grid-action-bar',
  templateUrl: './grid-action-bar.component.html',
  styleUrls: ['./grid-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridActionBarComponent implements OnInit {
  @Output() isEditable = new EventEmitter<boolean>();
  @Output() addItem = new EventEmitter<void>();
  editable: boolean = false;
  constructor() {}

  ngOnInit() {}

  onChangeEditMode(event: MatSlideToggleChange) {
    this.editable = event.checked;
    this.isEditable.emit(event.checked);
  }

  onAddItem() {
    this.addItem.emit();
  }
}
