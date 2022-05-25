import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  KtdGridComponent,
  KtdGridLayout,
  KtdGridLayoutItem,
  ktdTrackById,
} from '@katoid/angular-grid-layout';
import { debounceTime, filter, fromEvent, merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-ktd-grid',
  templateUrl: 'ktd-grid.component.html',
  styleUrls: ['ktd-grid.component.scss'],
})
export class KtdComponent implements OnInit, OnDestroy {
  @ViewChild(KtdGridComponent, { static: true }) grid:
    | KtdGridComponent
    | undefined;
  cols: number = 12;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
    { id: '0', x: 0, y: 0, w: 4, h: 4 },
    { id: '1', x: 4, y: 0, w: 4, h: 4 },
    { id: '2', x: 8, y: 0, w: 4, h: 4 },
    { id: '3', x: 0, y: 3, w: 4, h: 4 },
    { id: '4', x: 4, y: 3, w: 8, h: 4 },
  ];

  trackById = ktdTrackById;
  resizeSubscription: Subscription | undefined;
  autoResize = true;

  onLayoutUpdated(layout: KtdGridLayout) {
    this.layout = layout;
  }

  /** Adds a grid item to the layout */
  addItemToLayout() {
    const maxId = this.layout.reduce(
      (acc, cur) => Math.max(acc, parseInt(cur.id, 10)),
      -1
    );
    const nextId = maxId + 1;

    const newLayoutItem: KtdGridLayoutItem = {
      id: nextId.toString(),
      x: 0,
      y: 0,
      w: 3,
      h: 3,
    };

    // Important: Don't mutate the array, create new instance. This way notifies the Grid component that the layout has changed.
    this.layout = [newLayoutItem, ...this.layout];
  }

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

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
