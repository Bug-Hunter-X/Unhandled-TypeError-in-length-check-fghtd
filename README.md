# Unhandled TypeError in length check

This repository demonstrates a common JavaScript error: a TypeError caused by attempting to access the `length` property of an object that doesn't have one.  The original code only checks for `null` and `undefined`, missing the case of objects without a `length` property.

The `bug.js` file contains the erroneous code. The `bugSolution.js` demonstrates the solution.

## Bug
The `foo` function is supposed to return the length of an array or 0 if the input is null or undefined. However, it fails when an object that doesn't have a `length` property is passed in.

## Solution
The solution adds a check to determine if the input is an array before accessing the `length` property.  This prevents the TypeError.