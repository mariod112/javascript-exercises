const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) =>{

        let personDeath = person.yearOfDeath;
        let oldestPersonDeath = oldestPerson.yearOfDeath;

        if(personDeath === undefined)
        {
            personDeath = new Date().getFullYear();
        }

        if(oldestPersonDeath === undefined)
        {
            oldestPersonDeath = new Date().getFullYear();
        }

        let age = personDeath - person.yearOfBirth;
        let oldestAge = oldestPersonDeath - oldestPerson.yearOfBirth;

        if (age > oldestAge)
        {
            return person;
        }
        else
        {
            return oldestPerson;
        }

    });
};

// Do not edit below this line
module.exports = findTheOldest;
