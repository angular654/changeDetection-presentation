import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdr-sample',
  templateUrl: './cdr-sample.component.html',
  styleUrls: ['./cdr-sample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdrSampleComponent implements OnInit {

  constructor(private _cdr: ChangeDetectorRef) { }

  /*
    detach() - полностью отключает механизм ChangeDetection;
    detectChanges() - принудительно запускает механизм отслеживания изменений;
    reattach() - используется после вызова detach() для активации механизма ChangeDetection.
    markForCheck() - помечает представление для детектора изменений для проверки на следующем цикле детекции
  */
  ngOnInit(): void {
  }

  get runChangeDetection() {
    console.warn('Проверка изменений cdr-sample')
    return true
  }
  markComponent() {
    this._cdr.markForCheck()
  }
  
  offChangeDetection() {
    this._cdr.detach()
  }

  rerunChangeDetection(){
    this._cdr.detach()
    this._cdr.reattach()
  }

  detectChanges() {
    this._cdr.detectChanges()
  }

}
