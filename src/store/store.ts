import { combineReducers } from 'redux';
import * as counter from './counter';
import * as turn from './turn';
import { Turn } from './turn/turn.types';

export class AppState {
  readonly counter?: counter.CounterRecord;
  readonly turn?: turn.Turn;
};

export const rootReducer = combineReducers<AppState>({
  counter: counter.counterReducer,
  turn: turn.turnReducer
});
