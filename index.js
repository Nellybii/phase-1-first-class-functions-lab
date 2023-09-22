// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers =  (function (){
    return drivers.slice(0,2);
})

const returnLastTwoDrivers =  (function (){
    return drivers.slice(2);
})
const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (){
    return (function fareMultiplier(fare){
    return fare*fare
    })
}
function fareDoubler(fare){
    return fare*2
}
function fareTripler(fare){
    return fare*3
}

function selectDifferentDrivers(drivers, funct){

  // const selectDifferentDriver = drivers && [returnFirstTwoDrivers() || returnLastTwoDrivers()]
   return (drivers && funct());
}