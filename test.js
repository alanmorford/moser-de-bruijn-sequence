/*
Name:           moser-de-bruijn-sequence - test.js
*/

'use strict';

const mdbModule = require ('./');
const moserDeBruijnSequence = mdbModule.moserDeBruijnSequence;
const dotest = require ('dotest');

// module basics
dotest.add ('Module', test => {

  test ()
    .isObject ('fail', 'exports', mdbModule)
    .isFunction ('fail', 'moserDeBruijnSequence', moserDeBruijnSequence)
    .done ();
});

// moserDeBruijnSequence base cases
dotest.add ('function: moserDeBruijnSequence', test => {

  test ()
    .isExactly ('fail', 'moserDeBruijnSequence(0)', moserDeBruijnSequence(0), 0)
    .isExactly ('fail', 'moserDeBruijnSequence(1)', moserDeBruijnSequence(1), 1)
    .isExactly ('fail', 'moserDeBruijnSequence(0)', moserDeBruijnSequence(2), 4)
    .isExactly ('fail', 'moserDeBruijnSequence(1)', moserDeBruijnSequence(3), 5)
    .done ();
});

// Start the tests
dotest.run ();
