function memo(func) {
  var cache = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (cache[key]) return cache[key];
    val = func.apply(null, arguments);
    cache[key] = val;
    return val;
  }
}