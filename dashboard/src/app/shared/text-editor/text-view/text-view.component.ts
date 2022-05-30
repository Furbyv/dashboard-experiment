import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject, Subject } from 'rxjs';
import { TextEditorDialogComponent } from '../text-editor-dialog/text-editor-dialog.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextViewComponent {
  private content$$: Subject<string> = new ReplaySubject(1);
  @Input() set content(value: string | null | undefined) {
    if (value) {
      this.content$$.next(value);
    }
  }
  @Output() contentChange: EventEmitter<string> = new EventEmitter();
  content$ = this.content$$.asObservable();
  constructor(private dialog: MatDialog) {
    this.content$$.next(
      '<p>Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Aliquet nibh praesent tristique magna sit. Non blandit massa enim nec dui nunc. Mollis nunc sed id semper risus in hendrerit. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. At quis risus sed vulputate odio ut. Sed risus pretium quam vulputate dignissim suspendisse in. <h1>Adipiscing</h1> <br> vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Libero enim sed faucibus <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> turpis in.</p> <p>Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Sed viverra tellus in hac habitasse platea dictumst vestibulum. In ornare quam viverra orci sagittis eu volutpat. Lorem ipsum dolor sit amet consectetur adipiscing. Neque viverra justo nec ultrices dui sapien eget mi. Suspendisse in est ante in nibh mauris cursus.</p>'
    );
  }

  openEditDialog(value: string) {
    const dialogRef = this.dialog.open(TextEditorDialogComponent, {
      width: '50vw',
      height: '80vh',
      data: value,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.content$$.next(result);
        this.contentChange.emit(result);
      }
    });
  }
}
