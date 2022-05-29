import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
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
  @Input() isModified: boolean | null = false;
  @Output() isEditable = new EventEmitter<boolean>();
  @Output() addItem = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
  @Output() discard = new EventEmitter<void>();
  editable: boolean = false;

  constructor() {}

  ngOnInit() {}

  isDisabled() {
    if (!this.editable) {
      return true;
    } else {
      return !this.isModified;
    }
  }

  onChangeEditMode(event: MatSlideToggleChange) {
    this.editable = event.checked;
    this.isEditable.emit(event.checked);
  }

  onAddItem() {
    this.addItem.emit();
  }

  onSave() {
    this.save.emit();
  }

  onDiscard() {
    this.discard.emit();
  }
}
