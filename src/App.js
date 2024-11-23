import { CssBaseline, Grid } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import {getPlacesData} from './api'
const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBoundes] = useState(null)
useEffect(() => {
  getPlacesData().then((data) => {
    console.log(data);
    setPlaces(data)
    
  });
},[])
  return (
  <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12} md={4}>
        <List />
      </Grid>
      <Grid item xs={12} md={8}>
        <Map 
        setBoundes={setBoundes}
        setCoordinates = {setCoordinates}
        />
      </Grid>
    </Grid>
  </>)
};

export default App;
