let person = {
    firstName: "Vedant",
    lastName: "Kapoor",
    age: 30
};

function ageInDays(obj, callback) {
    let fullName = obj.firstName + " " + obj.lastName;
    let ageInDays = (obj.age)*365;
    callback(fullName, ageInDays);
}

function logResult(name, age) {
    console.log(`The person's full name is ${name} and their age in days is ${age}.`)
}

ageInDays(person, logResult);