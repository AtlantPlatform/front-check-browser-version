let browserUpdate = require('browser-update/update.npm.js');
let template = require('./message.pug');

let config = {
  required: {
    e: 16,
    i: 12,
    f: 52,
    o: 44,
    s: 10.3,
    c: 57,
    samsung: 7.0,
    vivaldi: 1.2
  },
  insecure: true, // show defailt temlate
  test: process.env.NODE_ENV === 'development',
  reminder: 0,
  reminderClosed: 1,
  onshow: function () {
    // addTemplate();
  },
};

function addTemplate() {
  require('./styles.scss');
  let body = document.querySelector('body');
  let child = document.createElement('div');
  child.innerHTML = template();
  body.appendChild(child);
}

browserUpdate(config);
