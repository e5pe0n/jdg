class HTTPError extends Error {
  constructor(status, statusText, url) {
    super(`${status} ${statusText}: ${url}`);
    this.status = status;
    this.statusText = statusText;
    this.url = url;
  }

  get name() {
    return "HTTPError";
  }
}

const err = new HTTPError(404, "Not Found", "http://example.com/");
