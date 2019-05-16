import React from 'react';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from './HomeIcon';
// import Link from 'react';
// import Timestamp from './Timestamp';

const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <HomeIcon />
            <Tab label="Home" href="https://www.codewars.com/dashboard"/>
            <Tab label="About" href="https://bohemianowl.bandcamp.com/" />
            <Tab label="Articles" href="https://www.cnn.com/articles" />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
