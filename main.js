var ellipticcurve = require("starkbank-ecdsa");

var Ecdsa = ellipticcurve.Ecdsa;
var PrivateKey = ellipticcurve.PrivateKey;

module.exports.requestHooks = [
  async context => {
    let pkContent = context.request.getEnvironmentVariable('privateKeyContent');
    let accessId = context.request.getEnvironmentVariable('accessId');
    let timestamp = Math.floor(Date.now() / 1000);

    if (accessId && pkContent) {
      let body = context.request.getBody() || "";
      let pk = PrivateKey.fromPem(pkContent);
      let message = `${accessId}:${timestamp}:${JSON.stringify(body)}`

      let signature = Ecdsa.sign(message, pk);

      context.request.setHeader('Access-Id', accessId);
      context.request.setHeader('Access-Time', timestamp);
      context.request.setHeader('Access-Signature', signature.toBase64());
    }
  }
];
