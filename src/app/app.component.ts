import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'onpush-strategy-sample';

  get runChangeDetection() { 
    console.log('Проверка изменений root'); 
    return true; 
  } 
}
