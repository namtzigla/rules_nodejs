import {fum} from 'fumlib';

import {name} from './bar';

console.log(`Hello, ${name} in ${fum}`);

// Test for sequences = false
class A {
  a() {
    return document.a;
  }
}
console.error(new A().a());
