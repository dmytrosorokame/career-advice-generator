const selectRandomWord = (words) => {
  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
};

module.exports = selectRandomWord;
