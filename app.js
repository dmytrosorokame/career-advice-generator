const getRandomAdvice = require("./utils/getRandomAdvice");
const prepareAdviceMessage = require("./utils/prepareAdviceMessage");

const init = () => {
  const advice = getRandomAdvice();
  const adviceMessage = prepareAdviceMessage(advice);

  console.log(adviceMessage);
};

init();
