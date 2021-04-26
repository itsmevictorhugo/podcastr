import axios from 'axios';

export const api = axios.create({
  // baseURL: process.env.API_URL || 'http://localhost:3333'
  baseURL: 'http://podcastr-app.s3-sa-east-1.amazonaws.com/server.json'
})