import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/itsmevictorhugo/podcastr/master/server.json'
  // baseURL: process.env.API_URL || 'http://localhost:3333'
})