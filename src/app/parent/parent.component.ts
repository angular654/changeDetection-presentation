import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
let index = 0;
interface IConfig {
  position: string
}
/*
При использовании ChangeDetectionStrategy.Default
  parent.component.ts:24 Проверка изменений view
  child.component.ts:19 Проверка представления
  parent.component.ts:24 Проверка изменений view
  child.component.ts:19 Проверка представления
*/

/*
При использовании ChangeDetectionStrategy.OnPush
  parent.component.ts:38 Проверка изменений view
  child.component.ts:19 Проверка представления
*/
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  private _index = 1;
  config: IConfig = {
    position: 'top'
  };

  onClick() {
    if (this.config.position === 'top') {
      this.config  = {
        position: 'bottom'
      }
    } else {
      this.config  = {
        position: 'top'
      }
    }
    /*
    <<Если>>
    this.config.position ='bottom';
    (ссылка не изменилась)

    В ChildComponent данные не поменяются при условии,
    что там установлена onPush детекция изменений
    */
  }
  get runChangeDetection() {
    console.log(`Проверка изменений parent ${this._index}`);
    return true;
  }
  constructor() {
    this._index = index++;
   }
  ngOnInit(): void {
  }

}
