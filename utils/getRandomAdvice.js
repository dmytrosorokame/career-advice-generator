const fs = require("fs");
const selectRandomWord = require("./selectRandomWord");

const getRandomAdvice = () => {
  const verbs = JSON.parse(fs.readFileSync("./data/verbs.json"));
  const adjectives = JSON.parse(fs.readFileSync("./data/adjectives.json"));
  const nouns = JSON.parse(fs.readFileSync("./data/nouns.json"));

  const randomVerb = selectRandomWord(verbs);
  const randomAdjective = selectRandomWord(adjectives);
  const randomNoun = selectRandomWord(nouns);

  const advice = `${randomVerb} ${randomAdjective} ${randomNoun}`;

  return advice;
};

module.exports = getRandomAdvice;
