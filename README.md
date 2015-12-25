The package exports a function that takes a single [decision tree](https://www.npmjs.com/packages/decision-tree-schema) argument and returns a sorted array listing the names of variables used in the decision tree's conditions.

```javascript
var assert = require('assert')
var variables = require('decision-tree-variables')

assert.deepEqual(
  variables({
    condition: { or: [ 'b', 'a' ] },
    true: { result: true },
    false: {
      condition: { and: [ 'b', 'c' ] },
      true: { result: true },
      false: { result: false } } }),
  [ 'a', 'b', 'c' ])
```
