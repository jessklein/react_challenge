import React from 'react';
import axios from 'axios';
import './index.css';

axios.get('testdata.txt')
  .then((response) => {
    console.log(response.data);
  });
