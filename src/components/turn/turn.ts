import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Turn } from '../../store/turn/turn.types';

@Component({
  selector: 'turn',
  template: `
    <p>
      {{ turn ? turn.name: 'Initial turn name' }}
    </p>
     <p>
      {{ turn ? turn.description: 'Initial turn description' }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TurnInfo {
  @Input() turn: Turn;
};
