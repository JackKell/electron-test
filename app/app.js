import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

import Details from '../app/component/details.component';
import Counter from '../app/component/counter.component';

import { INCREMENT_COUNTER } from './action/counter.action';
import { DECREMENT_COUNTER } from './action/counter.action';

import counterReducer from './reducer/counter.reducer';

const store = createStore(counterReducer, 0);

class App extends React.Component {
  render() {
    return (
        <div>
          <Details title="Up Down Counter Test">
          </Details>
            <Counter
                initialCount={store.getState()}
                onIncrement={() => {
                    store.dispatch({type: INCREMENT_COUNTER});
                    console.log(store.getState());
                }}
                onDecrement={() => {
                    store.dispatch({type: DECREMENT_COUNTER})
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
