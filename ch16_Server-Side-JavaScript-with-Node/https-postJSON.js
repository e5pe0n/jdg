const https = require("https");

function postJSON(host, endpoint, body, port, username, password) {
  return new Promise((resolve, reject) => {
    const bodyText = JSON.stringify(body);

    const requestOptions = {
      method: "POST",
      host: host,
      path: endpoint,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(bodyText),
      },
    };
    if (port) {
      requestOptions.port = port;
    }
    if (username && password) {
      requestOptions.auth = `${username}:${password}`;
    }

    const request = https.request(requestOptions);
    request.write(bodyText);
    request.end();

    request.on("error", (e) => reject(e));

    request.on("response", (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP status ${response.statusCode}`));

        response.resume(); // open memory used this response body
        return;
      }

      response.setEncoding("utf-8");
      let body = "";
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (err) {
          reject(err);
        }
      });
    });
  });
}
