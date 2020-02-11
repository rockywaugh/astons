import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill();

export default function fetchApi(method, url, data) {

  console.log('fetch-api data', data);

  const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) };

  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-with': 'XMLHttpRequest',
    },
    credentials: 'same-origin',
    ...body

  }).then((response) => {

    console.log('fetch-api response', response);

    response.json()
  })
}