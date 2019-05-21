import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HomeIcon from './HomeIcon';
import Toolbar from '@material-ui/core/Toolbar';
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

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
    classes: PropTypes.object.isRequired
  }
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  appState = () => {
    const {articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  }
state = this.appState();
onStoreChange = () => {
  this.setState(this.appState);
}
componentDidMount() {
  this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  this.props.store.startClock();
}
componentWillUnmount() {
  this.props.store.unsubscribe(this.subscriptionId);
}
state = {
  value: 1,
};

handleChange = (event, value) => {
  this.setState({ value });
};

render() {
  const { classes } = this.props;
  const { value } = this.state;
  let { articles, searchTerm } = this.state;
  const searchRE = new RegExp(searchTerm, 'i');
  if (searchTerm) {
    articles = pickBy(articles, (value) => {
      return value.title.match(searchRE)
      || value.body.match(searchRE);
    });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
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
        {value === 3 && <TabContainer><div><ArticleList articles={articles} /></div></TabContainer>}
      <Timestamp />
      <SearchBar />

      </div>
    );
  }
}

export default withStyles(styles)(App);
