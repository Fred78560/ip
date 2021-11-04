exports.action = function(data){

var http = require('http');

http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    console.log("My public IP address is: " + ip);
  JarvisIASpeech("Votre adresse IP public est "+ip)
  });
});
 
}
