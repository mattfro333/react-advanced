import React from 'react';
import storeProvider from './storeProvider';

const styles = {
  time: {
  position: 'absolute',
  top: '2.5em',
  left: '.8em',
  }
};

class Timestamp extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    const currentTimeDisplay = this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const nextTimeDisplay = nextProps.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    return currentTimeDisplay !== nextTimeDisplay;
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('Timestamp');
  }
  render() {
    return (
      <div style={styles.time}>
        {this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>
    );
  }
}
function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}


export default storeProvider(extraProps)(Timestamp);
