import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-cell-overlay',
  templateUrl: './edit-cell-overlay.component.html',
  styleUrls: ['./edit-cell-overlay.component.scss'],
})
export class EditCellOverlayComponent {
  @Output() delete = new EventEmitter<void>();
  constructor() {}

  onDelete() {
    this.delete.emit();
  }
}
