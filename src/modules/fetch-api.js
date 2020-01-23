import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();

export default function fetchApi(method, url, data) {

  console.log('fetch-api data', data);

  console.log('fetch-api JSON.stringify(data)', JSON.stringify(data));

  const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) };

  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-with': 'XMLHttpRequest',
    },
    credentials: 'same-origin',
    ...body
  }).then(response => response.json())

}