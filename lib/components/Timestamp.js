import React from 'react';
import storeProvider from './storeProvider';

const styles = {
  time: {
    position: 'fixed',
    top: '1.1em',
    left: '.6em',
    fontSize: '.76em',
  }
};

class Timestamp extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    const currentTimeDisplay = this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const nextTimeDisplay = nextProps.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    return currentTimeDisplay !== nextTimeDisplay;
  }
  componentDidUpdate(nextProps, nextState) {

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
