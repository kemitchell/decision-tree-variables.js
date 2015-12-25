module.exports = decisionTreeVariables

var booleanJSONVariables = require('boolean-json-variables')

function decisionTreeVariables(tree) {
  return variables(tree, [ ]) }

function variables(tree, alreadyFound) {
  if ('result' in tree) {
    return alreadyFound }
  else {
    booleanJSONVariables(tree.condition)
      .forEach(function(variable) {
        if (alreadyFound.indexOf(variable) === -1) {
          alreadyFound.push(variable) } })
    variables(tree.true, alreadyFound)
    variables(tree.false, alreadyFound)
    alreadyFound.sort()
    return alreadyFound } }
