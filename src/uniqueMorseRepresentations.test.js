const test = require('ava');

/**
 * 完成
 * Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter.
 * For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-").
 * We'll call such a concatenation, the transformation of a word.
 * Return the number of different transformations among all words we have.
 * @param {*} words
 * @return {number}
 */
const uniqueMorseRepresentations = function (words) {
	const morseArray = [ ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.." ];
	const wordArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const res = new Set();
	for (const [ i, word ] of words.entries()) {
		let morse = '';
		for (const [ j, letter ] of word.split('').entries()) {
			morse += morseArray[ wordArray.indexOf(letter) ];
		}
		res.add(morse);
	}
	return res.size;
};

test('numJewelsInStones 0', t => {
	const res = uniqueMorseRepresentations([ "gin", "zen", "gig", "msg" ]);
	t.is(res, 2);
});
