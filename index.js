function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
/*
function saturdayFun(activity=`bathe my dog`){
    return `This Saturday, I want to ${activity}!`
}
*/
//Mondays work
const mondayWork= function(activity=`go to the office`){
    return `This Monday, I will ${activity}.`
}

// Wrap ajdectivewrapAdjective=function ()
const wrapAdjective =function(cost= `*`){
    return function(object=`a hardworker`){
        return `You are ${cost}${object}${cost}!`
    }
}