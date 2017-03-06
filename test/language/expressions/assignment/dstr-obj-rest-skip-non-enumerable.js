// This file was procedurally generated from the following sources:
// - src/dstr-assignment/obj-rest-skip-non-enumerable.case
// - src/dstr-assignment/default/assignment-expr.template
/*---
description: Rest object doesn't contain non-enumerable properties (AssignmentExpression)
esid: sec-variable-statement-runtime-semantics-evaluation
es6id: 13.3.2.4
features: [destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    VariableDeclaration : BindingPattern Initializer

    1. Let rhs be the result of evaluating Initializer.
    2. Let rval be GetValue(rhs).
    3. ReturnIfAbrupt(rval).
    4. Return the result of performing BindingInitialization for
       BindingPattern passing rval and undefined as arguments.
---*/
var rest;
var obj = {a: 3, b: 4};
Object.defineProperty(obj, "x", { value: 4, enumerable: false });

var result;
var vals = obj;

result = {...rest} = vals;

assert.sameValue(rest.a, 3);
assert.sameValue(rest.b, 4);
assert.sameValue(Object.getOwnPropertyDescriptor(rest, "x"), undefined);

verifyEnumerable(rest, "a");
verifyWritable(rest, "a");
verifyConfigurable(rest, "a");

verifyEnumerable(rest, "b");
verifyWritable(rest, "b");
verifyConfigurable(rest, "b");


assert.sameValue(result, vals);
