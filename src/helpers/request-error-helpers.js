class RequestErrorHelper {
  constructor({ response }) {
    console.log('building');
    this._error = {
      message: response.data,
      status: response.status,
      statusText: response.statusText,
    }
  }

  get error() {
    console.log('test');
    console.error(this._error);
    return this._error;
  }
}

module.exports = RequestErrorHelper;