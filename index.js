// Your code here

function createEmployeeRecord(employee) {
    let newObj = {}

    newObj.firstName = employee[0]
    newObj.familyName = employee[1]
    newObj.title = employee[2]
    newObj.payPerHour = employee[3]
    newObj.timeInEvents = []
    newObj.timeOutEvents = []

    return newObj
}

function createEmployeeRecords(anArr) {
    return anArr.map(createEmployeeRecord)
}

function createTimeInEvent(anArr, time) {
    let [date, hour] = time.split(' ');
    hour = parseInt(hour, 10);
    let type = "TimeIn"
    anArr.timeInEvents.push( {type, date, hour} )
    return anArr
}

function createTimeOutEvent(obj, time) {
    let [date, hour] = time.split(' ');
    hour = parseInt(hour);
    let type = "TimeOut"
    obj.timeOutEvents.push( {type, date, hour})
    return obj

}

function hoursWorkedOnDate(obj, workDate) {
    let timeIn = obj.timeInEvents
        .filter(element => element.date === workDate)
        .map(element => element.hour)

    let timeOut = obj.timeOutEvents
        .filter(element =>  element.date === workDate)
        .map(element => element.hour)
        
    return (timeOut - timeIn) /100
    
}

function wagesEarnedOnDate(obj, workDate) {
    return hoursWorkedOnDate(obj, workDate) * obj.payPerHour
}

function allWagesFor(obj, workDate) {
    let wages = hoursWorkedOnDate(obj, workDate)
    let money = 0
    wages.forEach( wage => {
        money += wage
    })
    console.log(money)
    return money
}