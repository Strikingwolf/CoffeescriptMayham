(function() {
  var a_func, factorial, given, make_a_func_replace_return, multiple, multiply, plus1, print, replace_based_on_return_value, the_end, unchanged,
    __slice = [].slice;

  make_a_func_replace_return = function(x, original_func) {
    var _function;
    return _function = function() {
      var __ignore;
      __ignore = original_func();
      return x;
    };
  };

  a_func = function(s) {
    print("Hello!");
    return s;
  };

  given = function(s) {
    return s + " My name is CoffeeScript";
  };

  replace_based_on_return_value = function(takes_original, original) {
    var _function;
    return _function = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return takes_original(original(args));
    };
  };

  the_end = replace_based_on_return_value(given, a_func);

  plus1 = function(n) {
    return n + 1;
  };

  unchanged = function(n) {
    return n;
  };

  factorial = function(n) {
    if (n) {
      return n * factorial(n - 1);
    } else {
      return 1;
    }
  };

  multiple = function(takes_original, original, how_many) {
    if (how_many > 0) {
      return multiple(takes_original, replace_based_on_return_value(takes_original, original), how_many - 1);
    } else {
      return original;
    }
  };

  multiply = function(args) {
    return args[0] * args[1];
  };

  print = function(s) {
    return console.log(s);
  };

  print(multiple(given, a_func, 1)("Hey"));

  print(multiple(plus1, factorial, 1)(5) - 1);

}).call(this);
