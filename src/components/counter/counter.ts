import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CounterRecord } from '../../store';

@Component({
  selector: 'counter',
  template: `
    <button ion-button (click)="decrement.emit()">
      -
    </button>

    {{ counter ? counter.counter : 0 }}

    <button ion-button (click)="increment.emit()">
      +
    </button>
    
    <button ion-button (click)="multiply.emit()">
      *
    </button>

    <button ion-button (click)="clean.emit()">
      Clean
    </button>

    <p> {{ counter ? counter.text: 'next test'}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  @Input() counter: CounterRecord;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() multiply = new EventEmitter<void>();
  @Output() clean = new EventEmitter<void>();
};
