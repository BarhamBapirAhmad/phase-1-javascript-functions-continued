// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

 
function  wrapAdjective ( cret = "*" ){
    return function (specification){
        return `You are ${cret}${specification}${cret}!`
    }
    
}
wrapAdjective("||")("a dedicated programmer ");

wrapAdjective("*")("a hard worker ");