const events = require("events");

const https = jest.genMockFromModule("https");
const res = new events.EventEmitter();

https.request = (options, callback) => {
  if (options.path === "/login/oauth/access_token") {
    callback(res);
    res.emit(
      "data",
      "access_token=gho_ZukD25NOL6J30GEYXT&scope=user%3Aemail&token_type=bearer"
    );
    res.emit("end");
  }
};

module.exports = https;
