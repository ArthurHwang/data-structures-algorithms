var findAndReplacePattern = function (words, pattern) {
	const result = [];

	for (const word of words) {
		const dictionary = {};
		let found = true;

		for (let i = 0; i < word.length; i++) {
			if (pattern[i] in dictionary) {
				if (dictionary[pattern[i]] !== word[i]) {
					found = false;
					break;
				}
			} else dictionary[pattern[i]] = word[i];
		}

		const dictionaryVals = Object.values(dictionary);

		if (dictionaryVals.length !== new Set(dictionaryVals).size) found = false;
		if (found) result.push(word);
	}

	return result;
};
