const findTheOldest = function(people) {
    return people.reduce((previous_person, current_person) => {
        let current_age;
        if (current_person.yearOfDeath == undefined){
            current_age = new Date().getFullYear() - current_person.yearOfBirth;
        }
        else current_age=current_person.yearOfDeath-current_person.yearOfBirth;

        let previous_age;
        if (previous_person.yearOfDeath == undefined){
            previous_age = new Date().getFullYear() - previous_person.yearOfBirth;
        }
        else previous_age=previous_person.yearOfDeath-previous_person.yearOfBirth;

        if (previous_age > current_age) return previous_person;
        else return current_person;
    } );
};

// Do not edit below this line
module.exports = findTheOldest;
