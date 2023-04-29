// code your solution here

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function saturdayFun(act = "roller-skate") {
  return `This Saturday, I want to ${act}!`
}

function wrapAdjective(wpar = "*") {
  let inner = function (par = "special") {
    return `You are ${wpar}${par}${wpar}!`;
  }
  return inner;
}

const encouragingPromptFunction = wrapAdjective("!!!");

wrapAdjective("%")("a dedicated programmer");