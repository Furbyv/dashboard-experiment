import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { MaterialModule } from '../material.module';
import { TextEditorDialogComponent } from './text-editor-dialog/text-editor-dialog.component';
import { TextViewComponent } from './text-view/text-view.component';

@NgModule({
  declarations: [TextViewComponent, TextEditorDialogComponent],
  imports: [CommonModule, FormsModule, QuillModule, MaterialModule],
  exports: [TextViewComponent],
})
export class TextEditorModule {}
