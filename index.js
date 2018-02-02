/*jslint indent: 2, maxlen: 80, node: true */
'use strict';
var r = require('./ssldebug.json'), k = r.key, c = r.cert, b = k + '\n' + c;
module.exports = function () { return { key: k, cert: c, both: b }; };
