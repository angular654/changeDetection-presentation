import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-presenter',
  templateUrl: './async-presenter.component.html',
  styleUrls: ['./async-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class AsyncPresenterComponent implements OnInit {
  @Input()
  time!: Date;
  
  ngOnInit() {
    
  }
  get myLifeSecs(): number{
    return (this.time.getTime() - new Date(2004,6,20).getTime())/ 1000;
  }

  get runChangeDetection() {
    console.warn('Проверка изменений async-presenter');
    return true;
  }
}
