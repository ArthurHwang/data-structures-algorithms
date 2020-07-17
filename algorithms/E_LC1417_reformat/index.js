var reformat = function (s) {
  if (s.length <= 1) return s;

  const letters = s.match(/[a-zA-Z]/g) || [];
  const nums = s.match(/[0-9]/g) || [];
  const result = [];
  const larger = letters.length > nums.length ? 'letters' : 'nums';

  if (!letters.length || !nums.length) return '';

  while (letters.length || nums.length) {
    let letter = letters.shift();
    let num = nums.shift();
    larger === 'letters' ? result.push(letter, num) : result.push(num, letter);
  }

  return result.join('');
};

console.log(reformat('a0b1c2'));
