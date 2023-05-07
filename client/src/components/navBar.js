import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, styled} from '@mui/material';

// import { NavLink } from 'react-router-dom';
//import styled from '@mui/material';

const Header = styled(AppBar)`
    background: #111111;
`;
    
// const Tabs = styled(NavLink)`
//     color: #FFFFFF;
//     margin-right: 20px;
//     text-decoration: none;
//     font-size: 20px;
// `;

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Header position="static" >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phone directory
          </Typography>
          <Button margin="10px" color="inherit" variant="outlined" href="/add"> Add </Button>
          <Button color="inherit" variant="outlined" href="/all"> All </Button>
        </Toolbar>
      </Header>
    </Box>
    )
}

export default NavBar;