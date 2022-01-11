import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
                <AppBar position="static" color="info">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
              © 2022 || All right are reserved by Md Gias Uddin 
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        </div>
    );
};

export default Footer;