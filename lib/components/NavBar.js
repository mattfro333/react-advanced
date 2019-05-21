// import React from 'react';
// import Tab from '@material-ui/core/Tab';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import HomeIcon from './HomeIcon';
// // import Link from 'react';
// // import Timestamp from './Timestamp';
//
// const NavBar = () => {
//   return(
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="title" color="inherit">
//             <HomeIcon />
//             <Tab label="Home" href="https://www.codewars.com/dashboard"/>
//             <Tab label="About" href="https://bohemianowl.bandcamp.com/" />
//             <Tab label="Articles" href="https://www.cnn.com/articles" />
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };
// export default NavBar;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Home from './Home';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Articles" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
