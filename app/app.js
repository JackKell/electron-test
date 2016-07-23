import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import Details from '../app/component/details.component';
import Counter from '../app/component/counter.component';

import { INCREMENT_COUNTER } from './action/counter.action';
import { DECREMENT_COUNTER } from './action/counter.action';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
      break;
    case DECREMENT_COUNTER:
      return state - 1;
      break;
    default:
      return state;
  }
}

const store = createStore(counterReducer, -5);

class App extends React.Component {
  render() {
    return (
      <div>
        <Details
          title="Up Down Counter Test">
        </Details>
        <Counter
          initialCount={store.getState()}
          onIncrement={() => {
            store.dispatch({type: 'INCREMENT_COUNTER'});
            console.log(store.getState());
          }}
          onDecrement={() => {
            store.dispatch({type: 'DECREMENT_COUNTER'})
            console.log(store.getState());
          }}>
        </Counter>
      </div>
    );
  }
}

function render() {
  ReactDOM.render(<App/>, document.getElementById('content'));
}
store.subscribe(render);
render();
