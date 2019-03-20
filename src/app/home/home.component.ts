import {ChangeDetectionStrategy, Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('insertTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent {

  currentIndex = 0;

  onShowNext() {
    this.currentIndex++;
  }
}
