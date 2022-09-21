/**
 * Very simple in-browser unit-test library, with zero deps.
 *
 * Background turns green if all tests pass, otherwise red.
 * View the JavaScript console to see failure reasons.
 *
 * Example:
 *
 *   adder.js (code under test)
 *
 *     function add(a, b) {
 *       return a + b;
 *     }
 *
 *   adder-test.html (tests - just open a browser to see results)
 *
 *     <script src="tinytest.js"></script>
 *     <script src="adder.js"></script>
 *     <script>
 *
 *     tests({
 *
 *       'adds numbers': function() {
 *         eq(6, add(2, 4));
 *         eq(6.6, add(2.6, 4));
 *       },
 *
 *       'subtracts numbers': function() {
 *         eq(-2, add(2, -4));
 *       },
 *
 *     });
 *     </script>
 *
 * That's it. Stop using over complicated frameworks that get in your way.
 *
 * -Joe Walnes
 * MIT License. See https://github.com/joewalnes/jstinytest/
 */
 var TinyTestHelper = {
  renderStats: function(tests, failures) {
      var summaryHeading = document.createElement('h1');
      var totalTests = Object.keys(tests).length;
      var passing = totalTests - failures;
      var summaryString = totalTests + ' tests ran: ' + passing + ' passed, ' + failures + ' FAILED.';
      console.log(summaryString);
      summaryHeading.textContent = summaryString;
      document.body.appendChild(summaryHeading);
  }
};
var TinyTest = {

  run: function(tests) {
      var failures = 0;
      for (var testName in tests) {
          var testAction = tests[testName];
          try {
              testAction.apply(this);
              console.log('%c' + testName, 'color: green;');
              // renderTest(testName, true)
          } catch (e) {
              failures++;
              console.groupCollapsed('%cError: ' + testName, 'color: red;');
              // console.log('%c' + testName, 'color: red;');
              // renderTest(testName, false)
              console.error(e.stack);
              console.groupEnd();
          }
      }
      setTimeout(function() { // Give document a chance to complete
          if (window.document && document.body) {
              document.body.style.backgroundColor = (failures == 0 ? '#99ff99' : '#ff9999');
              //
              TinyTestHelper.renderStats(tests, failures);
              //
          }
      }, 0);
  },

  fail: function(msg) {
      throw new Error('fail(): ' + msg);
  },

  assert: function(value, msg) {
      if (!value) {
          throw new Error('assert(): ' + msg);
      }
  },

  assertEquals: function(expected, actual) {
      if (expected != actual) {
          throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
      }
  },

  assertStrictEquals: function(expected, actual) {
      if (expected !== actual) {
          throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
      }
  },

};

var fail               = TinyTest.fail.bind(TinyTest),
  assert             = TinyTest.assert.bind(TinyTest),
  assertEquals       = TinyTest.assertEquals.bind(TinyTest),
  eq                 = TinyTest.assertEquals.bind(TinyTest), // alias for assertEquals
  assertStrictEquals = TinyTest.assertStrictEquals.bind(TinyTest),
  tests              = TinyTest.run.bind(TinyTest);

// function renderTest(testName, testDidPass) {
//   let $pEl = document.createElement('p');
//   $pEl.textContent = testName;
//   if (!testDidPass) $pEl.style.color = 'red';
//   document.body.appendChild($pEl);
// }