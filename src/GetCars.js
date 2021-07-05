import React, { useEffect, useState } from 'react';
import CarsList from './CarsList';
import axios from 'axios';
import './index.css';

export default function GetCars() {
  // Get API Data
  const [cars, getCars] = useState('');

  const api_url = 'testdata.txt';

  useEffect(() => {
    getAllCars();
  }, []);
  
  const getAllCars = () => {
    axios.get(`${api_url}`)
    .then((response) => {
      const allCars = response.data;
      getCars(allCars);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return(
    <CarsList cars={cars} />
  )
}
