import React, { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { LoadScript } from '@react-google-maps/api';
import '../../components/globals.css'

const Header = () => {
  const inputRef = useRef(null);

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      libraries={['places']}
    > 
      <AppBar position="static">
        <Toolbar className= "flex justify-between ">
          <Typography variant="h5" className=" text-white">
            Travel Advisor
          </Typography>
          <Box display="flex" alignItems="center" ml={2}>
            <Typography variant="h6" mr={2}>
              Explore new places
            </Typography>
            <Autocomplete>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <InputBase
                  inputRef={inputRef}
                  placeholder="Search ..."
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    padding: '8px',
                    width: '300px',
                  }}
                />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </LoadScript>
  );
};

export default Header;
