var debug = require('debug');

function cloggy(name) {
  return {
    info: debug(name + ':info'),
    debug: debug(name + ':debug'),
    log: debug(name + ':log'),
    error: debug(name + ':error'),
    warn: debug(name + ':warn')
  }
}

module.exports = cloggy;
