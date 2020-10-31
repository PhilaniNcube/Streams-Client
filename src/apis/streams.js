import axios from 'axios';

const streams = axios.create({
  baseURL: 'http://localhost:3004',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default streams;
