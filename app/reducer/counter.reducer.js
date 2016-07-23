import { INCREMENT_COUNTER } from '../action/counter.action';
import { DECREMENT_COUNTER } from '../action/counter.action';

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
      break;
    case INCREMENT_COUNTER:
      return state - 1;
      break;
    default:
      return state;
  }
}
