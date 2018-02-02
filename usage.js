/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var equal = require('assert').strictEqual,
  base64BlockRgx = /(\-{5}\n)((?:\n*[!-,\.-~]+)+)(\n\-{5}END)/g;
function noData(s) { return s.replace(base64BlockRgx, '$1…$3'); }

(function readmeDemo() {
  // #BEGIN# usage demo
  var dummyCert = require('ssldebug-dummycert-pmb')(),
    block = ['-----BEGIN ', '-----\n…\n-----END ', '-----'];
  equal(noData(dummyCert.key),  block.join('RSA PRIVATE KEY'));
  equal(noData(dummyCert.cert), block.join('CERTIFICATE'));
  equal(noData(dummyCert.both), block.join('RSA PRIVATE KEY') +
                         '\n' + block.join('CERTIFICATE'));
  // #ENDOF# usage demo
}());









console.log("+OK usage test passed.");    //= "+OK usage test passed."
