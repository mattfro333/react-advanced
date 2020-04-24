import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HomeIcon from './HomeIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Album from './Album';
import SignIn from './SignIn';
import { withStyles } from '@material-ui/core/styles';

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
  body: {
    paddingTop: '1em'
  }
});

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
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
  value: 0,
};

handleChange = (event, value) => {
  this.setState({ value });
};

render() {
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
    <div className={styles.root}>
      <CssBaseline />
      <AppBar position="fixed">

        <Toolbar>
            <Typography variant="title" color="inherit">
 <HomeIcon />
 <Timestamp />
    <Tabs value={value} onChange={this.handleChange}>

              <Tab label="SignIn"/>
              <Tab label="Albums" />
              <Tab label="Articles" />
              <Tab label={<SearchBar />}/>

                </Tabs>
            </Typography>
          </Toolbar>

        </AppBar>
        {value === 0 && <TabContainer><SignIn/></TabContainer>}
        {value === 1 && <TabContainer><Album/></TabContainer>}
        {value === 2 && <TabContainer><div><ArticleList articles={articles} /></div></TabContainer>}
        {value === 3 && <TabContainer><div><ArticleList articles={articles} /></div></TabContainer>}



      </div>
    );
  }
}

export default withStyles(styles)(App);
