import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-text-editor-dialog',
  templateUrl: './text-editor-dialog.component.html',
  styleUrls: ['./text-editor-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextEditorDialogComponent {
  content: string = 'erobniorenboernboin';
  constructor(
    public dialogRef: MatDialogRef<TextEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
    this.content = data;
  }

  onSave() {
    this.dialogRef.close(this.content);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
