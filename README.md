
<!--#echo json="package.json" key="name" underline="=" -->
ssldebug-dummycert-pmb
======================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
A dummy SSL certificate for debugging, wrapped in JSON and a node module.
<!--/#echo -->


[`ssldebug.pem`](ssldebug.pem)
&mdash;{[`pem2json.sed`](pem2json.sed)}&rarr;
[`ssldebug.json`](ssldebug.json):

```json
{"key":"-----BEGIN RSA PRIVATE KEY-----\n…\n-----END RSA PRIVATE KEY-----",
"cert":"-----BEGIN CERTIFICATE-----\n…\n-----END CERTIFICATE-----"}
```

The node module exports a factory function that produces copies of
the object from the JSON file, with an extra property `both`
that contains both, concatenated.

Usage
-----

from [usage.js](usage.js):

<!--#include file="usage.js" outdent="  " code="javascript"
  start="  // #BEGIN# usage demo" stop="  // #ENDOF# usage demo" -->
<!--#verbatim lncnt="8" -->
```javascript
var dummyCert = require('ssldebug-dummycert-pmb')(),
  block = ['-----BEGIN ', '-----\n…\n-----END ', '-----'];
equal(noData(dummyCert.key),  block.join('RSA PRIVATE KEY'));
equal(noData(dummyCert.cert), block.join('CERTIFICATE'));
equal(noData(dummyCert.both), block.join('RSA PRIVATE KEY') +
                       '\n' + block.join('CERTIFICATE'));
```
<!--/include-->


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
