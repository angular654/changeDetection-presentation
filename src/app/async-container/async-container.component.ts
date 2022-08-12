import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-container',
  templateUrl: './async-container.component.html',
  styleUrls: ['./async-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncContainerComponent implements OnDestroy {
  readonly time$: Observable<Date>;
  timeToShow!: Date;
  timeSub!: Subscription;

  constructor(private _cdr: ChangeDetectorRef) {
    this.time$ = interval(1000).pipe(
      map(() => {
        return new Date();
      })
    );
  }

  // Реализация логики работы Async Pipe
  customAsyncPipe() {
    this.timeSub = this.time$.subscribe((result) => {
      this.timeToShow = result;
      this._cdr.markForCheck();
    });
  }
  get runChangeDetection() {
    console.warn('Проверка изменений async-container');
    return true;
  }

  ngOnDestroy(): void {
    this.timeSub.unsubscribe();
  }
}
