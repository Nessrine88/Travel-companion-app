import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card, CardMedia } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const places =[
    {name: 'Cool Place '},
    {name: 'Best Bear '},
    {name: 'Best Steak '},
    {name: 'Cool Place '},
    {name: 'Best Bear '},
    {name: 'Best Steak '},
    {name: 'Cool Place '},
    {name: 'Best Bear '},
    {name: 'Best Steak '},
  ]
  return (
    <div className="px-5 py-8">
      <Typography variant="h4" className="mb-6 font-semibold">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <div className="flex gap-6">
        {/* Type Select */}
        <FormControl className="w-full">
          <InputLabel sx={{ color: 'gray', fontWeight: '600' }} className="text-base">
            Type
          </InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 bg-white text-gray-800"
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>

        {/* Rating Select */}
        <FormControl className="w-full">
          <InputLabel sx={{ color: 'gray', fontWeight: '600' }} className="text-base">
            Rating
          </InputLabel>
          <Select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 bg-white text-gray-800"
            label="Rating" // Ensure the label matches the InputLabel
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={3} className=''>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
