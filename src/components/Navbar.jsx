import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ResponsiveAppBar() {
   
  const cartItems = useSelector(state => state.cart)

 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            React-Redux
          </Typography>

        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
              <Button
              to ="/"
              as = {Link}
            sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Products
              </Button>

          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Button 
            to="/cart"
            as = {Link}
            sx={{ my: 2, color: 'white', display: 'block' }}
              >
                My Bag {cartItems.length}
              </Button>
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
