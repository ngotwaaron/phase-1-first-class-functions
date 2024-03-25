const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    const fn = function() {
      return "before all";
    };
    return fn;
  }
  function returnsAnAnonymousFunction() {
    return function() {
    };
  }
  