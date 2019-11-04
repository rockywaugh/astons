import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();

export default function fetchApi(method, url, data) {
  const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) };
  //const proxyurl = 'https://cors-anywhere.herokuapp.com/';

  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-with': 'XMLHttpRequest',
      /*
      'Access-Control-Allow-Origin': 'https://cc-rocky.firebaseapp.com',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      */
    },
    credentials: 'same-origin',
    ...body
  }).then(response => response.json())

}