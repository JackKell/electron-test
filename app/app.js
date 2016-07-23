import React from 'react';
import ReactDOM from 'react-dom';

import Details from '../app/component/details.component';
import Counter from '../app/component/counter.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Details
          title="Up Down Counter Test">
        </Details>
        <Counter
          initialCount="-5">
        </Counter>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
