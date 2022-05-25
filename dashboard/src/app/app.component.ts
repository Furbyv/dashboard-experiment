import { Component, OnInit, ViewChild } from '@angular/core';
import {
  KtdGridComponent,
  KtdGridLayout,
  ktdTrackById,
} from '@katoid/angular-grid-layout';
import { debounceTime, filter, fromEvent, merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
    { id: '0', x: 0, y: 0, w: 3, h: 3 },
    { id: '1', x: 3, y: 0, w: 3, h: 3 },
    { id: '2', x: 0, y: 3, w: 3, h: 3 },
    { id: '3', x: 3, y: 3, w: 3, h: 3 },
  ];
  @ViewChild(KtdGridComponent, { static: true }) grid:
    | KtdGridComponent
    | undefined;
  trackById = ktdTrackById;
  resizeSubscription: Subscription | undefined;
  autoResize = true;
  onLayoutUpdated($event: any) {}

  ngOnInit() {
    this.resizeSubscription = merge(
      fromEvent(window, 'resize'),
      fromEvent(window, 'orientationchange')
    )
      .pipe(
        debounceTime(50),
        filter(() => this.autoResize)
      )
      .subscribe(() => {
        this.grid?.resize();
      });
  }
}
