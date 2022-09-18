import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Link, useNavigate, Outlet, useLocation,
} from 'react-router-dom';
import { Box, Tabs, Tab } from '@mui/material';
import { styles } from '../styles.jsx';

// axios get to get the authenticated page from the
// isAuthenticated route in the server then navigates to the react page 'profile'
// if err goes to the login page
function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [value, setVal] = useState(() => location);

  const handleChange = (event, newValue) => {
    setVal(newValue);
    navigate(newValue);
  };
  const handleClick = (e) => {
    if (useLocation.pathname !== e.target.id) {
      setVal(e.target.id);
      navigate(e.target.id);
    }
  };
  return (
  // <>
  // <CssBaseline />
  // <Container fixed>
  //   <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    <Box sx={styles}>
      <Box
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          centered
        >
          <Tab
            value="/profile"
            label="Profile"
            onClick={handleClick}
            id="/profile"
          />
          <Tab
            value="/search"
            label="Search"
            onClick={handleClick}
            id="/search"
          />
          <Tab
            value="/home"
            label="Adoptions"
            onClick={handleClick}
            id="/home"
          />
          <Tab value="/login" label="Login" onClick={handleClick} id="/login" />

          {/* postforms tab is not going to exist later, currently here for testing purposes */}
          <Tab
            value="/postForms"
            label="PostForms"
            onClick={handleClick}
            id="/postForms"
          />
          <Tab
            value="/postFeed"
            label="Stories"
            onClick={handleClick}
            id="/postFeed"
          />
        </Tabs>
      </Box>
      <br />
      <Outlet />
    </Box>
  // </Container>
  // </>
  );
}

export default App;
