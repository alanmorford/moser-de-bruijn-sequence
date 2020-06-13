/*
Name:           moser-de-bruijn-sequence
Description:    This function calculates moser-de-bruijn-sequence numbers
Author:         Alan Morford
Source & docs:  https://github.com/alanmorford/moser-de-bruijn-sequence
*/

function moserDeBruijnSequence(n) {
  if (n < 0) {
    return null;
  }
  if (Number.isInteger(n)) {
    if (n==0) {
      return 0;
    } else if (n == 1) {
      return 1
    } else if (n % 2 == 0) {
      return 4 * moserDeBruijnSequence(n / 2)
    }  else if (n % 2 == 1) {
      return 4 * moserDeBruijnSequence(Math.floor(n / 2)) + 1
    }
    return 0;
  }
  return null;
}

exports.moserDeBruijnSequence = moserDeBruijnSequence;
