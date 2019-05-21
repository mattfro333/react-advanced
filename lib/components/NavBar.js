import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HomeIcon from './HomeIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Home from './Home';
import ArticleList from './ArticleList';

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
    value: 1,
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

          <Toolbar>
            <Typography variant="title" color="inherit">

<Tabs value={value} onChange={this.handleChange}>
          <HomeIcon />
              <Tab label="Home" />
              <Tab label="About" />
              <Tab label="Articles" />
                </Tabs>
            </Typography>
          </Toolbar>

        </AppBar>
        {value === 1 && <TabContainer><Home/></TabContainer>}
        {value === 2 && <TabContainer>Item Two</TabContainer>}
        {value === 3 && <TabContainer><ArticleList articles={articles} /></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
