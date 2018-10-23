import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.PureComponent {
//   shouldComponentUpdate(nextProps, nextState) {
//     return true;
//   }
  componentWillUpdate(nextProps, nextState) {
    console.log('Timestamp');
  }
  render() {
    return (
      <div>
        {this.props.timestamp}
      </div>
    );
  }
}
function extraProps(store) {
  return {
    timestamp: store.getState().timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  };
}


export default storeProvider(extraProps)(Timestamp);
