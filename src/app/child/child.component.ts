import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

interface IConfig {
  position: string
}

@Component({
  selector: 'tooltip',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() config!: IConfig ; 

  get runChangeDetection() { 
    console.log('Проверка изменений child'); 
    return true; 
  } 
  ngOnInit(): void {
  }

}
