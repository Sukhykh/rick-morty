import axios from 'axios';

const baseUrlApi = 'https://rickandmortyapi.com/api/'
const baseUrlGraphQl = 'https://rickandmortyapi.com/graphql/'

export const instanceApi = axios.create({
  baseURL: baseUrlApi
});

export const instanceGraphQl = axios.create({
  baseURL: baseUrlGraphQl
});