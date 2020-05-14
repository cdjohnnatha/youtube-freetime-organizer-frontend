class RequestErrorHelper {
  constructor({ response }) {
    this._error = {
      message: response.data,
      status: response.status,
      statusText: response.statusText,
    }
  }

  get error() {
    return this._error;
  }
}

module.exports = RequestErrorHelper;