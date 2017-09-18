
const apiUrl = 'http://localhost:8003/graphql';

export default class SHEETS_API {
  static fetchData(request) {
    return fetch(`${apiUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then(response => response.json())
      .catch((err) => {
        throw err;
      });
  }
}
