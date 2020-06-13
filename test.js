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

// Start the tests
dotest.run ();
