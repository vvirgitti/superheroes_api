var urlBasic = "http://gateway.marvel.com/v1/comics?ts="
var apiKeyvalue = "&apikey="
var hashKeyvalue = "&hash="
var url = urlBasic + timestamp + apiKeyvalue + public_key + hashKeyvalue + md5

console.log(url);


http://gateway.marvel.com/v1/comics?ts=1&apikey=b9dba0e302697d42fac0bbdb03248907&hash=0a6e2aa54d10c43dc5396bdba165ccff
