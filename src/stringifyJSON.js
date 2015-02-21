// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  function stringify(input) {
    var type = typeof input;
    if (type == 'number' || type == 'boolean' || input === null || input === undefined) {
      return String(input);
    };

    if (type == 'string') {
      return '"'+input+'"';
    };

    if (type == 'function') {
      return undefined;
    };

    if (Array.isArray(input)) {
      var results = '[';
      for (var i=0; i<input.length; i++) {
        results += stringify(input[i]);
        if (i<input.length-1) {
          results +=',';
        };
      };
      results += ']';
      return results;
    };

    if (type == 'object' && !Array.isArray(input)) {
      var results = '{';
      var keys = Object.keys(input);
      for (var i=0; i<keys.length; i++) {
        if (input[keys[i]]===undefined || typeof input[keys[i]]=='function') {
          continue;
        };
        results += stringify(keys[i])+':'+stringify(input[keys[i]]);
        if (i<keys.length-1) {
          results +=',';
        };
      };
      results += '}';
      return results;
    };

  };

  return stringify(obj);
};

console.log(stringifyJSON({}));