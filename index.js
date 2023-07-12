// Code your solution in this file!
const returnFirstTwoDrivers =(drivers)=>{
    if(drivers.length <= 2){
        return drivers.slice(0);

    }else if (drivers.length > 2){
        return drivers.slice(0, 2);
    }
}

const returnLastTwoDrivers =(drivers)=>{
    if (drivers.length == 2){
        return drivers.slice(-2);
    }else if (drivers.length > 2){
        return drivers.slice(-2);
    }
}


const createFareMultiplier=(price)=>{
    function fareMultiplier(fare=price){
        return fare *fare;
    }
    return fareMultiplier;
};

const fareMultiplier =createFareMultiplier();

const fareDoubler=(fare)=>{
    return fare * 2;
};

const fareTripler=(fare)=>{
    return fare * 3;
};

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

const selectDifferentDrivers=(drivers, selectdriver)=>{
    return selectdriver(drivers);
}
