//a function passed as an agument to another function!!

function callbackExample(name, callback) {
  log(callback(name));
}

var callback = function(name) {
  return "Hola " + name;
}

callbackExample("Abel Mohammado", function(name) {
  return "Hola " + name;
});
