export default class Api{
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  getInitialLamps() {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}
