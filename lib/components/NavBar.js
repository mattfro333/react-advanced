import React from 'react';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from './HomeIcon';

const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <HomeIcon/>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Articles" />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
