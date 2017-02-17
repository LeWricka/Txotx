import { Action } from 'redux';
import { INITIAL_STATE } from './turn.initial-state';
import { Turn } from './turn.types';
export function turnReducer(
  state: Turn = INITIAL_STATE,
  action: Action): Turn {
    return state;
}
