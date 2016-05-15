'use strict';

function foo(a, {b, c = 'bar'} = {}) {
  console.log(a, b, c);
}

foo();
foo('a');
foo('a', {b: 'b'});
foo('a', {b: 'b', c: 'c'});

