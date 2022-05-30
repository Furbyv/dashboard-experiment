import { Injectable } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import {
  filter,
  map,
  merge,
  Observable,
  of,
  ReplaySubject,
  shareReplay,
  startWith,
  Subject,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { CardType } from './card-types';
import { foo } from './default-dashboard';

export interface CardTemplate {
  id: number;
  type: CardType;
  content?: string;
  position: GridsterItem;
}

const Key: string = 'exp-dashboard';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private editedDashboard$$: Subject<CardTemplate[] | null> = new ReplaySubject(
    1
  );
  private refresh$$: Subject<boolean> = new ReplaySubject(1);
  private save$$: Subject<void> = new ReplaySubject(1);

  private save$ = this.save$$.pipe(
    withLatestFrom(this.editedDashboard$$),
    switchMap(([_, db]) =>
      db ? this.saveDashBoardToLocalStorage(db) : of(null)
    ),
    map((_) => true),
    startWith(true),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  private refresh$ = merge(this.save$, this.refresh$$).pipe(
    tap((_) => this.editedDashboard$$.next(null))
  );

  private originalDashBoard$ = this.refresh$.pipe(
    switchMap(() => this.getDashboardFromLocalStorage()),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  dashboard$ = merge(
    this.editedDashboard$$.pipe(
      filter((db) => !!db),
      map((db) => db ?? [])
    ),
    this.originalDashBoard$
  ).pipe(shareReplay({ bufferSize: 1, refCount: true }));

  modified$ = this.editedDashboard$$.pipe(map((db) => !!db));

  constructor() {}

  public setDashboard(dashboard: CardTemplate[]): void {
    this.editedDashboard$$.next(dashboard);
  }

  public saveDashboard() {
    this.save$$.next();
  }

  public discardChanges() {
    this.refresh$$.next(true);
  }

  private getDashboardFromLocalStorage(): Observable<CardTemplate[]> {
    const storedDb = localStorage.getItem(Key);
    if (storedDb) {
      console.log(JSON.parse(storedDb));
      return of(JSON.parse(storedDb));
    } else {
      return of(foo);
    }
  }

  private saveDashBoardToLocalStorage(
    dashboard: CardTemplate[]
  ): Observable<void> {
    return of(localStorage.setItem(Key, JSON.stringify(dashboard)));
  }
}
