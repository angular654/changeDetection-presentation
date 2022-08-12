import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
let index = 0;
@Component({
  selector: 'app-async-presenter',
  templateUrl: './async-presenter.component.html',
  styleUrls: ['./async-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class AsyncPresenterComponent implements OnInit {
  private _index = 1;
  @Input()
  time!: Date;
  
  constructor() {
    this._index = index++
  }
  ngOnInit() {
    
  }
  get myLifeSecs(): number{
    return (this.time.getTime() - new Date(2004,6,20).getTime())/ 1000;
  }

  get runChangeDetection() {
    console.warn(`Проверка изменений async-presenter ${this._index}`);
    return true;
  }
}
