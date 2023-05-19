import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const routes = ['Home', 'About us', 'Services', 'Gallery'];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CHEF
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: 'none' } }}
      >
        <List>
          {routes.map((route, index) => (
            <ListItem button key={index} component={Link} to={`/${route.toLowerCase()}`}>
              <ListItemText primary={route} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar sx={{ display: { xs: 'none' } }} /> {/* Add some spacing to the content */}
    </div>
  );
};

export default NavBar;
